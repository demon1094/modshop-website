import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY };
    background: ${({ theme }) => theme.COLORS.BACKGROUND };
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY };

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED };
    }
  }
`