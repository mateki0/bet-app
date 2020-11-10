import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
  }
`;
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
};

export default MyApp;
