import Pages from 'Components/Pages';
import * as React from 'react';
import { firestore } from '../../../firebase';
import SingleUserBet from '../SingleUserBet';
import CurrentBetsWrapper from '../styled/CurrentBetsWrapper';

const ActualUserBets = () => {
  const [isUserLogged, setIsUserLogged] = React.useState('');
  const [actualUserBets, setActualUserBets] = React.useState([]);
  const [actualBetsCurrentPage, setActualBetsCurrentPage] = React.useState(1);
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
        const actualBets = dataFromCollection
          .filter((a) => a.couponEndDate + fiveHours > today)
          .sort((a, b) => a.couponEndDate - b.couponEndDate);
        setActualUserBets(actualBets);
      });
      return () => subscribe;
    }
  }, [isUserLogged]);

  React.useEffect(() => {
    if (actualBetsCurrentPage === 1) {
      setMinBetsSlice(0);
    }
    if (actualBetsCurrentPage > 1) {
      setMinBetsSlice((actualBetsCurrentPage - 1) * 5);
    }
    setMaxBetsSlice(actualBetsCurrentPage * 5);
  }, [actualBetsCurrentPage]);
  return (
    <CurrentBetsWrapper>
      <h2>Aktualne zakłady</h2>
      {actualUserBets
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
        pagesNumber={Math.ceil(actualUserBets.length / 5)}
        setPage={(e) => setActualBetsCurrentPage(e)}
        currentPage={actualBetsCurrentPage}
      />
    </CurrentBetsWrapper>
  );
};

export default ActualUserBets;
