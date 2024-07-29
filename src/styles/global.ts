import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: 400 ;
  }



  html, body {
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.primary};
    
  }

  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
  }

  a {
    text-decoration: none; 
  }


  ul {
    list-style-type: none;
  }

  img{
    width: 100%;
    height: 100%;
  }
  
`;
