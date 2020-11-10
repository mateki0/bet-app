import * as React from 'react';
import Link from 'next/link';
import Navigation from './styled/Navigation';
import Menu from './styled/Menu';
import AppName from './styled/AppName';
import SearchInput from './styled/SearchInput';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';

const Header = () => {
  return (
    <header>
      <Navigation>
        <Menu>
          <AppName>E-Sport Bet App</AppName>
          <SearchInput />
          <NavList>
            <NavListItem>
              <Link href="/">Strona Główna</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">Wiadomości</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">Konto</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">Kontakt</Link>
            </NavListItem>
          </NavList>
        </Menu>
      </Navigation>
    </header>
  );
};

export default Header;
