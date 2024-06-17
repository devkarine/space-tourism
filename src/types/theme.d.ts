import 'styled-components';

type FontSize = {
  extraSmall: string,
  small: string,
  medium?: string,
  large?: string,
  extraLarge?: string
};

type FontWeight = {
  regular: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;

      neutral: {
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
      }
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      size: {
        text: FontSize,
        header: FontSize
      };
      weight: FontWeight;
    };
  }
}
