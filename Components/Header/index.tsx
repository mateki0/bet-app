import * as React from 'react';
import Link from 'next/link';
import Navigation from './styled/Navigation';
import Menu from './styled/Menu';
import AppName from './styled/AppName';
import SearchInput from './styled/SearchInput';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';
import Loupe from '../../assets/icons/loupe.svg';
import InputWrapper from './styled/InputWrapper';
import SearchButton from './styled/SearchButton';
import { auth } from '../../firebase';
import LogoutButton from './styled/LogoutButton';
const Header = () => {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('currentUser', user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
      }
    });
  }, []);
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <header>
      <Navigation>
        <Menu>
          <AppName>E-Sport Bet App</AppName>
          <InputWrapper>
            <SearchInput name="search" placeholder="Wyszukaj gracza lub drużynę" />
            <SearchButton>
              <Loupe width="20px" height="20px" />
            </SearchButton>
          </InputWrapper>
          <NavList>
            <NavListItem>
              <Link href="/">Strona Główna</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/mecze">Mecze</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/wiadomosci">Wiadomości</Link>
            </NavListItem>
            <NavListItem>
              {currentUser ? (
                <LogoutButton onClick={handleLogout}>Wyloguj się</LogoutButton>
              ) : (
                <Link href="/logowanie">Zaloguj się</Link>
              )}
            </NavListItem>
          </NavList>
        </Menu>
      </Navigation>
    </header>
  );
};

export default Header;
