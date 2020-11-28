import SingleMatch from 'Components/SideBar/SingleMatch';
import * as React from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import CouponEndDateWrapper from './styled/CouponEndDateWrapper';

import MatchesWrapper from './styled/MatchesWrapper';
import ShowAllButton from './styled/ShowAllButton';
import SingleBetValueWrapper from './styled/SingleBetValueWrapper';
import SingleUserBetWrapper from './styled/SingleUserBetWrapper';
import ValueSpan from './styled/ValueSpan';

type SingleBet = {
  date: number;
  team1Name: string;
  team1Id: number;
  team2Name: string;
  team2Id: number;
  course: number;
  matchId: number;
  bet: number;
  length: number;
};
type SingleBetTypes = {
  allBets: SingleBet[];
  betValue: number;
  possibleWin: number;
  placeBetDate: number;
  couponEndDate: number;
};
const SingleUserBet = ({
  betValue,
  possibleWin,
  allBets,
  placeBetDate,
  couponEndDate,
}: SingleBetTypes) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const fiveHours = 18000000;
  const handleMatchesOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SingleUserBetWrapper>
      <SingleBetValueWrapper>
        <div>
          <span>Postawiono:</span>
          <ValueSpan>{betValue} PLN</ValueSpan>
        </div>
        <div>
          <span>Mozliwa wygrana:</span>
          <ValueSpan>{possibleWin} PLN</ValueSpan>
        </div>

        <div>
          <span>Data zakładu:</span>
          <ValueSpan>{new Date(placeBetDate).toLocaleDateString()} </ValueSpan>
        </div>
      </SingleBetValueWrapper>
      <ShowAllButton onClick={handleMatchesOpen}>
        Zobacz wszystkie mecze ({allBets.length})
      </ShowAllButton>
      <MatchesWrapper>
        {allBets.map(({ team1Name, team1Id, team2Name, team2Id, course, bet, date }, id) => (
          <SlideDown className={'my-dropdown-slidedown'} key={id}>
            {isOpen ? (
              <SingleMatch
                team1Name={team1Name}
                team1Id={team1Id}
                team2Name={team2Name}
                team2Id={team2Id}
                course={course}
                bet={bet}
                date={date}
              />
            ) : (
              ''
            )}
          </SlideDown>
        ))}
        <CouponEndDateWrapper>
          <h3>
            Data rozstrzygnięcia kuponu{' '}
            {new Date(couponEndDate + fiveHours).toLocaleTimeString().slice(0, -3)}{' '}
            {new Date(couponEndDate + fiveHours).toLocaleDateString()}
          </h3>
        </CouponEndDateWrapper>
      </MatchesWrapper>
    </SingleUserBetWrapper>
  );
};
export default SingleUserBet;
