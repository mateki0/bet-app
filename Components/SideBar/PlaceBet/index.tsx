import * as React from 'react';
import PlaceBetWrapper from './styled/PlaceBetWrapper';
import PlaceButton from './styled/PlaceButton';
import PlnLabel from './styled/PlnLabel';
import PossibleWin from './styled/PossibleWin';
import PossibleWinWrapper from './styled/PossibleWinWrapper';
import ValueInput from './styled/ValueInput';
import ValueWrapper from './styled/ValueWrapper';
import { BetsContext } from 'Contexts/BetsContext';
import { firestore } from '../../../firebase';
import ChangeValueButton from './styled/ChangeValueButton';
const roundAccurately = (number, decimalPlaces) =>
  // @ts-expect-error
  Number(Math.round(number + 'e' + decimalPlaces) + 'e-' + decimalPlaces);
const PlaceBet = ({ totalCourse }: { totalCourse: number }) => {
  const [currentBetValue, setCurrentBetValue] = React.useState(2);
  const [possibleWin, setPossibleWin] = React.useState(totalCourse * currentBetValue);
  const [isUserLogged, setIsUserLogged] = React.useState('');
  const { preparedUserBets } = React.useContext(BetsContext);

  const handleCurrentBetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentBetValue(parseInt(e.currentTarget.value));
  };
  const handleIncrementValue = () => {
    setCurrentBetValue(currentBetValue + 1);
  };
  const handleDecrementValue = () => {
    if (currentBetValue > 0) setCurrentBetValue(currentBetValue - 1);
  };
  React.useEffect(() => {
    setPossibleWin(currentBetValue * totalCourse);
    setIsUserLogged(localStorage.getItem('currentUser'));
  }, [currentBetValue, totalCourse]);

  const handlePlaceBet = () => {
    const today = Date.now();
    if (!isUserLogged) {
      alert('Proszę się zalogować, aby wysłać kupon');
    } else {
      const betsCollection = firestore.collection(isUserLogged);
      const couponEndDate = preparedUserBets.map((a) => a.date).sort();
      betsCollection.add({
        allBets: preparedUserBets,
        betValue: currentBetValue,
        possibleWin: roundAccurately(possibleWin, 2),
        placeBetDate: today,
        couponEndDate: couponEndDate[couponEndDate.length - 1],
      });
      alert('Dziękujemy, kupon został wysłany');
    }
  };
  return (
    <PlaceBetWrapper isVisible={preparedUserBets.length > 0}>
      <ValueWrapper>
        <ChangeValueButton onClick={handleDecrementValue}>-</ChangeValueButton>
        <ValueInput
          type="number"
          name="value"
          id="value"
          min="2"
          value={currentBetValue}
          onChange={handleCurrentBetValue}
        />
        <ChangeValueButton onClick={handleIncrementValue}>+</ChangeValueButton>
      </ValueWrapper>
      <PossibleWinWrapper>
        <PossibleWin>Możliwa wygrana: {roundAccurately(possibleWin, 2)} PLN</PossibleWin>
      </PossibleWinWrapper>
      <PlaceButton onClick={handlePlaceBet}>Wyślij kupon</PlaceButton>
    </PlaceBetWrapper>
  );
};

export default PlaceBet;
