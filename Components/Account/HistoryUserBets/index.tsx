import * as React from 'react';
import { firestore } from '../../../firebase';
import SingleUserBet from '../SingleUserBet';
import CurrentBetsWrapper from '../styled/CurrentBetsWrapper';
import EndedBetsHeading from './styled/EndedBetsHeading';

const HistoryUserBets = () => {
  const [isUserLogged, setIsUserLogged] = React.useState('');
  const [endedUserBets, setEndedUserBets] = React.useState([]);
  const [historyBetsCurrentPage, setHistoryBetsCurrentPage] = React.useState(1);
  const [minBetsSlice, setMinBetsSlice] = React.useState(0);
  const [maxBetsSlice, setMaxBetsSlice] = React.useState(5);
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
        const EndedUserBets = dataFromCollection.filter((a) => a.couponEndDate < today);

        setEndedUserBets(EndedUserBets);
      });
      return () => subscribe;
    }
  }, [isUserLogged]);

  React.useEffect(() => {
    if (historyBetsCurrentPage > 1) {
      setMinBetsSlice(historyBetsCurrentPage - 1 * 5);
    }
    setMaxBetsSlice(historyBetsCurrentPage * 5);
  }, [historyBetsCurrentPage]);

  return (
    <CurrentBetsWrapper>
      <EndedBetsHeading>Zakończone zakłady</EndedBetsHeading>
      {endedUserBets
        .slice(minBetsSlice, maxBetsSlice)
        .map(({ betValue, possibleWin, allBets, placeBetDate, couponEndDate }, id) => (
          <SingleUserBet
            key={id}
            betValue={betValue}
            possibleWin={possibleWin}
            allBets={allBets}
            placeBetDate={placeBetDate}
            couponEndDate={couponEndDate}
          />
        ))}
    </CurrentBetsWrapper>
  );
};

export default HistoryUserBets;
