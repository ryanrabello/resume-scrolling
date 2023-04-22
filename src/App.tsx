import styled, { ThemeProvider, th, x } from "@xstyled/styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Plane } from "./components/Plane/Plane";
import Balancer from "react-wrap-balancer";
import { ComponentProps, FC } from "react";
import { theme } from "./theme";
import { Spinner } from "./components/Spinner/Spinner";

const Section: FC<ComponentProps<typeof x.div>> = ({ ...props }) => (
  <x.div
    // Don't use margin here it breaks something with the absolute positioned items
    h={"100vh"}
    w={"100vw"}
    p={5}
    display={"flex"}
    justifyContent={"center"}
    {...props}
  />
);

const HeaderContainer = styled.div<{ align?: string }>`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "start"};
  text-shadow: -2px -2px 2px ${th.color("background")},
    2px 2px 2px ${th.color("background")};
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-family: "Inter";
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.4;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-family: "Inter";
  font-weight: thin;
`;

// const Paragraph = styled.p`
//   font-size: 1rem;
//   font-family: "Inter";
//   font-weight: normal;
//   line-height: 1.5;
//   max-width: 500px;
// `;

const Paragraph: FC<ComponentProps<typeof x.div>> = ({
  children,
  ...props
}) => {
  return (
    <x.div
      fontSize="1rem"
      fontFamily="Inter"
      fontWeight="normal"
      lineHeight={1.5}
      maxWidth={500}
      {...props}
    >
      <Balancer>{children}</Balancer>
    </x.div>
  );
};

function App() {
  return (
    <x.div h={"100vh"} w={"100%"}>
      <Canvas color={"#FEFBF3"}>
        {/* <ambientLight color={'#CAA9C7'} /> */}
        <directionalLight
          color={th.color("primary")}
          position={[0, 1, 0.25]}
          intensity={1}
        />
        <ScrollControls pages={5} damping={0.1}>
          <Scroll>
            <Plane />
            <Spinner position={[0, -8, 0]} />
          </Scroll>
          <Scroll html>
            {/* Needed duplicate ThemeProvider for properly passing context through three fiber */}
            <ThemeProvider theme={theme}>
              <Section pt={{ md: 20, lg: 200 }}>
                <HeaderContainer>
                  <SubHeading>Welcome To</SubHeading>
                  <Heading>Ryan Rabello</Heading>
                  <Paragraph>
                    The software engineering product that will transform the way
                    your company approaches technology. Our innovative software
                    engineering solution is the epitome of luxury when it comes
                    to designing and developing high-quality software.
                  </Paragraph>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer align="end">
                  <SubHeading>Ryan Rabello and your buisness,</SubHeading>
                  <Heading>Perfectly in Sync</Heading>
                  <Paragraph>
                    At Ryan Rabello, we believe that software should work
                    seamlessly with your business. That's why our product is
                    designed to collaborate with your team in the most effective
                    way possible. Whether you're a small start-up or a large
                    corporation, Ryan Rabello will integrate perfectly into your
                    workflow, making your business run like a well-oiled
                    machine.
                  </Paragraph>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>
                    5-Year Legacy of Mastery with React and TypeScript
                  </SubHeading>
                  <Heading>Expertise Perfected</Heading>
                  <Paragraph>
                    Ryan Rabello is the product of years of experience and
                    expertise in the software engineering field. We have spent
                    over 5 years perfecting our craft, and our expertise in
                    React and TypeScript is unparalleled. With Ryan Rabello, you
                    can be sure that you're getting the best possible product on
                    the market.
                  </Paragraph>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>The Pinnacle of Software Engineering</SubHeading>
                  <Heading>Unmatched in Quality and Performance</Heading>
                  <Paragraph>
                    Ryan Rabello is the product of years of experience and
                    expertise in the software engineering field. We have spent
                    over 5 years perfecting our craft, and our expertise in
                    React and TypeScript is unparalleled. With Ryan Rabello, you
                    can be sure that you're getting the best possible product on
                    the market.
                  </Paragraph>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>
                    Experience the Ultimate Luxury in Software Engineering
                  </SubHeading>
                  <Heading>Get Ryan Today</Heading>
                  <Paragraph>
                    Ready to experience the luxury and functionality of Ryan
                    Rabello? It's easy - simply click the button below to get
                    started. Our team is standing by to help you integrate Ryan
                    Rabello into your business and take your operations to new
                    heights. Don't wait - get Ryan Rabello today and experience
                    the difference for yourself!
                  </Paragraph>
                </HeaderContainer>
              </Section>
            </ThemeProvider>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </x.div>
  );
}

export default App;
