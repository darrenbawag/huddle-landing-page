import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.97rem;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: ${({ color }) => color};
  }

  h1 {
    font-size: 2.99rem;
  }

  h2 {
    font-size: 2.53rem;
    line-height: 1;
  }

  p {
    color: ${({ color }) => color};
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 40px;
  }

  img {
    max-width: 100%;
  }
`;