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

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    body: "IBM Plex Mono",
    heading: "Cormorant Garamond",
  },
  defaultColorModeName: "dark",
};

const GlobalStyle = createGlobalStyle`
  #root, body {
    width: 100%;
  }

  html, body {
    background-color: #282828;
  }
`;

function App() {
  const Section = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Heading = styled.h1`
    font-size: 6rem;
    font-family: "Cormorant Garamond";
  `;

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <x.div h={"100vh"} w={"100%"}>
          <Canvas color={"#FEFBF3"}>
            <ambientLight color={"#CAA9C7"} />
            <directionalLight color={"#5562CB"} position={[0, 1, 0.25]} />
            <ScrollControls pages={4} damping={0.1}>
              <Scroll>
                {/*<LavaLamp/>*/}
                {/*<Ripple />*/}
                {/*<Spheres/>*/}
              </Scroll>
              <Scroll html>
                <Section>
                  <Heading>Finance is a force of nature</Heading>
                  <x.div h="60vh"></x.div>
                </Section>
                <Section>
                  <Heading>
                    Changing the <br /> nature of <br /> business
                  </Heading>
                </Section>
                <Section>
                  <Heading>A future with returns</Heading>
                </Section>
                <Section>
                  <Heading>A diversity of dividends</Heading>
                </Section>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </x.div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
