import { firestore } from '../../firebase';
import * as React from 'react';
import AccountContainer from './styled/AccountContainer';
import CurrentBetsWrapper from './styled/CurrentBetsWrapper';
import HistoryWrapper from './styled/HistoryWrapper';
import SingleUserBet from './SingleUserBet';

type BetsTypes = {
  userBets: {
    id: string;
  };
};

const Account = () => {
  const [isUserLogged, setIsUserLogged] = React.useState('');
  const [actualUserBets, setActualUserBets] = React.useState([]);
  const [endedUserBets, setEndedUserBets] = React.useState([]);
  React.useEffect(() => {
    setIsUserLogged(localStorage.getItem('currentUser'));
    const today = Date.now();
    if (isUserLogged) {
      const userCollection = firestore.collection(isUserLogged);

      const documentCollection = (doc) => {
        return { id: doc.id, ...doc.data() };
      };
      const subscribe = userCollection.onSnapshot((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentCollection);
        console.log(dataFromCollection);
        const actualBets = dataFromCollection.filter((a) => a.couponEndDate > today);
        console.log(actualBets);
        const EndedUserBets = dataFromCollection.filter((a) => a.couponEndDate < today);
        setActualUserBets(actualBets);
        setEndedUserBets(EndedUserBets);
      });
    }
  }, [isUserLogged]);
  console.log(actualUserBets);
  if (!isUserLogged) {
    return (
      <AccountContainer>
        <h1>Proszę się zalogować aby zobaczyć swoje kupony</h1>
      </AccountContainer>
    );
  }

  return (
    <AccountContainer>
      <CurrentBetsWrapper>
        <h2>Aktualne zakłady</h2>
        {actualUserBets.map(
          ({ betValue, possibleWin, allBets, placeBetDate, couponEndDate }, id) => (
            <SingleUserBet
              key={id}
              betValue={betValue}
              possibleWin={possibleWin}
              allBets={allBets}
              placeBetDate={placeBetDate}
              couponEndDate={couponEndDate}
            />
          )
        )}
      </CurrentBetsWrapper>
      <HistoryWrapper>
        <h2>Zakończone zakłady</h2>
        {actualUserBets.map(
          ({ betValue, possibleWin, allBets, placeBetDate, couponEndDate }, id) => (
            <SingleUserBet
              key={id}
              betValue={betValue}
              possibleWin={possibleWin}
              allBets={allBets}
              placeBetDate={placeBetDate}
              couponEndDate={couponEndDate}
            />
          )
        )}
      </HistoryWrapper>
    </AccountContainer>
  );
};
export default Account;
