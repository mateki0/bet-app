import Pages from 'Components/Pages';
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
    const fiveHours = 18000000;
    setIsUserLogged(localStorage.getItem('currentUser'));
    const today = Date.now();
    if (isUserLogged) {
      const userCollection = firestore.collection(isUserLogged);

      const documentCollection = (doc) => {
        return { id: doc.id, ...doc.data() };
      };
      const subscribe = userCollection.onSnapshot((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentCollection);
        const EndedUserBets = dataFromCollection
          .filter((a) => a.couponEndDate + fiveHours < today)
          .sort((a, b) => a.couponEndDate - b.couponEndDate);

        setEndedUserBets(EndedUserBets);
      });
      return () => subscribe;
    }
  }, [isUserLogged]);

  React.useEffect(() => {
    if (historyBetsCurrentPage === 1) {
      setMinBetsSlice(0);
    }
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
      <Pages
        pagesNumber={Math.ceil(endedUserBets.length / 5)}
        setPage={(e) => setHistoryBetsCurrentPage(e)}
        currentPage={historyBetsCurrentPage}
      />
    </CurrentBetsWrapper>
  );
};

export default HistoryUserBets;
