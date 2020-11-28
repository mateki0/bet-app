import * as React from 'react';

import SideHeading from './styled/SideHeading';
import SideItem from './styled/SideItem';
import SideItemsList from './styled/SideItemsList';
import { BetsContext } from 'BetsContext';
import BetsBarContainer from './styled/BetsBarContainer';

import PlaceBet from './PlaceBet';
import SingleMatch from './SingleMatch';

const BetsBar = ({ isOpen }: { isOpen: boolean }) => {
  const { preparedUserBets } = React.useContext(BetsContext);

  const totalCourse =
    preparedUserBets && preparedUserBets.length
      ? preparedUserBets
          .map((a) => a.course)
          .reduce((a, b) => {
            return a * b;
          })
      : 0;
  console.log(preparedUserBets);
  return (
    <BetsBarContainer isOpen={isOpen}>
      <SideHeading>Twoje zakłady</SideHeading>
      <SideItemsList>
        {preparedUserBets.map(
          ({ team1Name, team1Id, team2Name, team2Id, course, bet, matchId, date }) => (
            <SideItem key={matchId} isRight>
              <SingleMatch
                team1Name={team1Name}
                team1Id={team1Id}
                team2Name={team2Name}
                team2Id={team2Id}
                course={course}
                bet={bet}
                matchId={matchId}
                date={date}
              />
            </SideItem>
          )
        )}
        <SideItem>
          <PlaceBet totalCourse={totalCourse} />
        </SideItem>
      </SideItemsList>
    </BetsBarContainer>
  );
};

export default BetsBar;
