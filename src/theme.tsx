import { defaultTheme } from "@xstyled/styled-components";

export const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    body: `'Inter', sans-serif`,
    heading: "Cormorant Garamond",
  },
  colors: {
    ...defaultTheme.colors,
    background: '#282828',
    primary: 'rgba(255, 255, 255, 0.87)',
  },
  defaultColorModeName: "dark",
};
