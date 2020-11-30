import * as React from 'react';
import AccountContainer from './styled/AccountContainer';
import ActualUserBets from './ActualUserBets';
import HistoryUserBets from './HistoryUserBets';

const Account = () => {
  const [isUserLogged, setIsUserLogged] = React.useState('');
  React.useEffect(() => {
    setIsUserLogged(localStorage.getItem('currentUser'));
  }, [isUserLogged]);

  if (!isUserLogged) {
    return (
      <AccountContainer>
        <h1>Proszę się zalogować aby zobaczyć swoje kupony</h1>
      </AccountContainer>
    );
  }

  return (
    <AccountContainer>
      <ActualUserBets />
      <HistoryUserBets />
    </AccountContainer>
  );
};
export default Account;
