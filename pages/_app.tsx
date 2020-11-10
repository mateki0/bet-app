import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  @font-face{
    font-family:'Archivo';
    src:url('/assets/fonts/Archivo-Regular.ttf');
    src:url('/assets/fonts/Archivo-Medium.ttf');
    src:url('/assets/fonts/Archivo-Bold.ttf');

  }
  *{
    font-family: 'Archivo', sans-serif;
  }
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
