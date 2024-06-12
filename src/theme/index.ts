import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    light: '#ffffff',
    primary: '#0B0D17',
    secondary: '#D0D6F9'
  },
  fonts: {
    family: {
      primary: 'Bellefair',
      secondary: 'Barlow Condensed',
      tertiary: 'Barlow'
    },
    size: {
        text: {
            extraSmall: '16px',
            small: '18px'
          },
        header: {
            extraSmall: '28px',
            small: '32px',
            medium: '58px',
            large: '100px',
            extraLarge: '144px'
          },

    },
    weight: {
      regular: 400
    }
  }
};
