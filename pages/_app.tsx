import { BetsProvider } from 'BetsContext';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  @font-face{
    font-family:'Archivo', sans-serif;;
    src:url('/assets/fonts/Archivo-Regular.ttf');
    src:url('/assets/fonts/Archivo-Medium.ttf');
    src:url('/assets/fonts/Archivo-Bold.ttf');
  }
  *{
    font-family: 'Archivo', sans-serif;
    box-sizing:border-box;
  }
    padding: 0;
    margin: 0;
    height:100%;
  }
`;
const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (!window.localStorage.getItem('preparedUserBets')) {
      localStorage.setItem('preparedUserBets', JSON.stringify({ preparedUserBets: [] }));
    }
  }, []);
  return (
    <BetsProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </BetsProvider>
  );
};

export default MyApp;
