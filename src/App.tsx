import styled, { ThemeProvider, th, x } from "@xstyled/styled-components";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Plane } from "./Plane/Plane";
import Balancer from "react-wrap-balancer";
import { ComponentProps, FC } from "react";
import { theme } from "./theme";

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

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Inter";
  font-weight: normal;
  line-height: 1.5;
  max-width: 500px;
`;

function App() {
  return (
    <x.div h={"100vh"} w={"100%"}>
      <Canvas
        color={"#FEFBF3"}
        camera={{
          fov: 20,
        }}
      >
        {/* <ambientLight color={'#CAA9C7'} /> */}
        {/* <directionalLight color={'#5562CB'} position={[0, 1, 0.25]} /> */}
        <ScrollControls pages={5} damping={0.1}>
          <Scroll>
            <Plane />
            {/*<LavaLamp/>*/}
            {/*<Ripple />*/}
            {/*<Spheres/>*/}
          </Scroll>
          <Scroll html>
            {/* Needed duplicate ThemeProvider for properly passing context through three fiber */}
            <ThemeProvider theme={theme}>
              <Section pt={{ md: 20, lg: 200 }}>
                <HeaderContainer>
                  <SubHeading>Welcome To</SubHeading>
                  <Heading>Ryan Rabello</Heading>
                  <Paragraph>
                    <Balancer>
                      The software engineering product that will transform the
                      way your company approaches technology. Our innovative
                      software engineering solution is the epitome of luxury
                      when it comes to designing and developing high-quality
                      software.
                    </Balancer>
                  </Paragraph>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer align="end">
                  <SubHeading>Ryan Rabello and your buisness,</SubHeading>
                  <Heading>Perfectly in Sync</Heading>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>
                    5-Year Legacy of Mastery with React and TypeScript
                  </SubHeading>
                  <Heading>Expertise Perfected</Heading>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>The Pinnacle of Software Engineering</SubHeading>
                  <Heading>Unmatched in Quality and Performance</Heading>
                </HeaderContainer>
              </Section>
              <Section>
                <HeaderContainer>
                  <SubHeading>
                    Experience the Ultimate Luxury in Software Engineering
                  </SubHeading>
                  <Heading>Get Ryan Today</Heading>
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
