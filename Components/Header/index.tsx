import * as React from 'react';
import Link from 'next/link';
import Navigation from './styled/Navigation';
import Menu from './styled/Menu';
import AppName from './styled/AppName';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';
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

          <NavList>
            <NavListItem>
              <Link href="/">Strona Główna</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/mecze">Mecze</Link>
            </NavListItem>

            <NavListItem>
              <Link href="/konto">Konto</Link>
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
