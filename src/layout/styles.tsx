import { createGlobalStyle } from 'styled-components';

export const LayoutStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;	
    margin: 0;
    padding: 0;
    font-family: 'Archivo', sans-serif;
  }
`;
