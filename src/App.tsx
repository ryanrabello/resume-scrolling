import styled, {
  ColorModeProvider,
  createGlobalStyle,
  defaultTheme,
  Preflight,
  ThemeProvider,
  x,
} from '@xstyled/styled-components'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    body: `'Inter', sans-serif`,
    heading: 'Cormorant Garamond',
  },
  defaultColorModeName: 'dark',
}

const GlobalStyle = createGlobalStyle`
  /* #root, body {
    width: 100%;
  } */
  
  html, body {
    background-color: #282828;
    color: rgba(255, 255, 255, 0.87);
    font-family: body;
  }
`

function App() {
  const Section = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const Heading = styled.h1`
    font-size: 4rem;
    font-family: 'Inter';
    text-transform: uppercase;
    font-weight: 100;
  `
  const SubHeading = styled.h2`
    font-size: 2rem;
    font-family: 'Inter';
    font-weight: thin;
`;

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <x.div h={'100vh'} w={'100%'}>
        <Canvas color={'#FEFBF3'}>
          {/* <ambientLight color={'#CAA9C7'} /> */}
          {/* <directionalLight color={'#5562CB'} position={[0, 1, 0.25]} /> */}
          <ScrollControls pages={5} damping={0.1}>
            <Scroll>
              {/*<LavaLamp/>*/}
              {/*<Ripple />*/}
              {/*<Spheres/>*/}
            </Scroll>
            <Scroll html>
              <Section>
                
                <SubHeading>
                  Welcome To
                </SubHeading>
                <Heading>Ryan Rabello</Heading>
                <x.div h="60vh"></x.div>
              </Section>
              <Section>
              <SubHeading>
                  Ryan Rabello and your buisness,
                </SubHeading>
                <Heading>
                  Perfectly in Sync
                </Heading>
              </Section>
              <Section>
                <SubHeading>
                5-Year Legacy of Mastery with React and TypeScript
                </SubHeading>
                <Heading>Expertise Perfected</Heading>
              </Section>
              <Section>
                <SubHeading>
                The Pinnacle of Software Engineering
                </SubHeading>
                <Heading>Unmatched in Quality and Performance</Heading>
              </Section>
              <Section>
                <SubHeading>
                Experience the Ultimate Luxury in Software Engineering
                </SubHeading>
                <Heading>Get Ryan Today</Heading>
              </Section>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </x.div>
    </ThemeProvider>
  )
}

export default App
