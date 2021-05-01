import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline:0;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background-color: #232a44;
    background: url('/background.jpg') no-repeat center center fixed; 
    background-size: cover;  
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
