import styled, {
  ColorModeProvider,
  createGlobalStyle,
  defaultTheme,
  Preflight,
  ThemeProvider,
  x,
} from "@xstyled/styled-components";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Plane } from "./Plane/Plane";

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    body: `'Inter', sans-serif`,
    heading: "Cormorant Garamond",
  },
  defaultColorModeName: "dark",
};

const GlobalStyle = createGlobalStyle`
  /* #root, body {
    width: 100%;
  } */
  
  html, body {
    background-color: #282828;
    color: rgba(255, 255, 255, 0.87);
    font-family: body;
  }
`;

const Section = styled.div`
  height: 100vh;
  width: 100vw;
`;
const HeaderContainer = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "start"};
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-family: "Inter";
  text-transform: uppercase;
  font-weight: 100;
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
  max-width: 400px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <x.div h={"100vh"} w={"100%"}>
        <Canvas color={"#FEFBF3"}>
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
              <Section>
                <HeaderContainer>
                  <SubHeading>Welcome To</SubHeading>
                  <Heading>Ryan Rabello</Heading>
                  <Paragraph>
                    The software engineering product that will transform the way
                    your company approaches technology. Our innovative software
                    engineering solution is the epitome of luxury when it comes
                    to designing and developing high-quality software
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
            </Scroll>
          </ScrollControls>
        </Canvas>
      </x.div>
    </ThemeProvider>
  );
}

export default App;
