import { BetsProvider } from 'Contexts/BetsContext';
import { SideBarsProvider } from 'Contexts/SideBarsContext';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'react-slidedown/lib/slidedown.css';
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
      <SideBarsProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </SideBarsProvider>
    </BetsProvider>
  );
};

export default MyApp;
