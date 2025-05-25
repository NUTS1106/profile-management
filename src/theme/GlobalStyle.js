import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Pretendard', sans-serif;
    overflow-y:hidden;
  }

  html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}
`;

export default GlobalStyle;
