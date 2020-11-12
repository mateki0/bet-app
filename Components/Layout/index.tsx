import Header from 'Components/Header';
import * as React from 'react';
import MainContent from './styled/MainContent';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;
