import SingleBetBox from 'Components/SingleBetBox';
import { MatchesProps } from 'pages';
import * as React from 'react';
import MiddleContainer from './styled/MiddleContainer';
import OpenSideBar from './styled/OpenSideBar';
import Chevron from '../../assets/icons/chevron.svg';
import Boxes from './styled/Boxes';
import MoreMatches from './styled/MoreMatches';
import LastThreads from './styled/LastThreads';
import ThreadTitle from './styled/ThreadTitle';
import ThreadText from './styled/ThreadText';
import ThreadsWrapper from './styled/ThreadsWrapper';
import ContentWrapper from './styled/ContentWrapper';
import { SideBarsContext } from 'Contexts/SideBarsContext';
import { useRouter } from 'next/router';
import { BetsContext } from 'Contexts/BetsContext';
import MoreMatchesWrapper from './styled/MoreMatchesWrapper';
const MiddleColumn = ({ matches }: MatchesProps) => {
  const { preparedUserBets, addBet } = React.useContext(BetsContext);
  React.useEffect(() => {
    const today = Date.now();
    const localPreparedBets = JSON.parse(window.localStorage.getItem('preparedUserBets'));
    const actualBets = localPreparedBets.length
      ? localPreparedBets.filter((a) => a.date > today)
      : [];
    window.localStorage.setItem('preparedUserBets', JSON.stringify(actualBets));
  }, []);
  React.useEffect(() => {
    const today = Date.now();
    const localPreparedBets = JSON.parse(window.localStorage.getItem('preparedUserBets'));

    if (!preparedUserBets.length && localPreparedBets && localPreparedBets.length) {
      const actualBets = localPreparedBets.filter((a) => a.date > today);
      actualBets.forEach((a) => {
        addBet(a.team1Name, a.team1Id, a.team2Name, a.team2Id, a.bet, a.course, a.matchId, a.date);
      });
    }
  }, []);
  const router = useRouter();
  const {
    isRightBarOpen,
    isLeftBarOpen,
    handleToggleRightBar,
    handleToggleLeftBar,
  } = React.useContext(SideBarsContext);
  return (
    <MiddleContainer>
      <OpenSideBar isLeft onClick={handleToggleLeftBar} isLeftBarOpen={isLeftBarOpen}>
        <Chevron />
      </OpenSideBar>
      <OpenSideBar onClick={handleToggleRightBar} isRightBarOpen={isRightBarOpen}>
        <Chevron />
      </OpenSideBar>
      <ContentWrapper isLeftBarOpen={isLeftBarOpen} isRightBarOpen={isRightBarOpen}>
        <Boxes isMatchesPage={router.pathname.startsWith('/mecze')}>
          {matches.map((match) => (
            <SingleBetBox match={match} key={match.id} />
          ))}
        </Boxes>
        {router.pathname.startsWith('/mecze') ? (
          ' '
        ) : (
          <MoreMatchesWrapper>
            <MoreMatches href="/mecze">Więcej meczy</MoreMatches>
          </MoreMatchesWrapper>
        )}
      </ContentWrapper>
    </MiddleContainer>
  );
};

export default MiddleColumn;
