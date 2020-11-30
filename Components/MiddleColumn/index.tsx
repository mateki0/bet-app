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
          <>
            <MoreMatches href="/mecze">Więcej meczy</MoreMatches>
            <ThreadsWrapper>
              <LastThreads>
                <ThreadTitle>Lorem Ipsum</ThreadTitle>
                <ThreadText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu metus pretium,
                  venenatis leo ac, tempus mauris. Curabitur placerat euismod magna sodales pretium.
                  Vestibulum ullamcorper tellus molestie congue pharetra. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
                  eleifend, ligula sed commodo dignissim, nibh ipsum pretium justo, et aliquet ante
                  elit sit amet risus. Maecenas vestibulum, enim quis aliquet fringilla, erat leo
                  ultrices dolor, vel blandit sem nulla condimentum nulla. Praesent ligula sem,
                  tempor ac quam consectetur, dignissim placerat quam. Morbi non porttitor dolor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu metus pretium,
                  venenatis leo ac, tempus mauris. Curabitur placerat euismod magna sodales pretium.
                  Vestibulum ullamcorper tellus molestie congue pharetra. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
                  eleifend, ligula sed commodo dignissim, nibh ipsum pretium justo, et aliquet ante
                  elit sit amet risus. Maecenas vestibulum, enim quis aliquet fringilla, erat leo
                  ultrices dolor, vel blandit sem nulla condimentum nulla. Praesent ligula sem,
                  tempor ac quam consectetur, dignissim placerat quam. Morbi non porttitor dolor.
                </ThreadText>
              </LastThreads>
            </ThreadsWrapper>
          </>
        )}
      </ContentWrapper>
    </MiddleContainer>
  );
};

export default MiddleColumn;
