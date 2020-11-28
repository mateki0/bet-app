import * as React from 'react';
import BetButton from './styled/BetButton';
import BoxWrapper from './styled/BoxWrapper';
import ButtonSpan from './styled/ButtonSpan';
import ButtonsWrapper from './styled/ButtonsWrapper';
import DateBox from './styled/DateBox';
import Day from './styled/Day';
import Hour from './styled/Hour';
import LeftColumnWrapper from './styled/LeftColumnWrapper';
import StarsWrapper from './styled/StarsWrapper';
import Team from './styled/Team';
import TeamLogo from './styled/TeamLogo';
import TeamName from './styled/TeamName';
import TeamsBox from './styled/TeamsBox';
import TournamentName from './styled/TournamentName';
import Star from '../../assets/icons/star.svg';
import { BetsContext } from 'BetsContext';

interface BoxProps {
  match: {
    team1: {
      name: string;
      id: number;
    };
    team2: {
      name: string;
      id: number;
    };
    date: number;
    team1Course?: number;
    team2Course?: number;
    event: {
      name: string;
      id: number;
    };
    stars: number;
    id: number;
  };
}
const SingleBetBox = ({ match }: BoxProps) => {
  const { date, team1, team2, stars, event, id } = match;
  const { addBet, deleteBet, preparedUserBets } = React.useContext(BetsContext);
  const firstTeamCourse = 1.62;
  const secondTeamCourse = 2.02;
  const starsDiv = [];
  for (let i = 0; i <= stars; i++) {
    starsDiv.push(<Star width="12px" height="12px" key={i} />);
  }
  type Team = {
    name: string;
    id: number;
  };
  const handleActive = (
    team1: Team,
    team2: Team,
    bet: number,
    course: number,
    matchId: number,
    date: number
  ) => {
    if (!team1.id || !team2.id) {
      alert('Jedna z drużyn nie jest jeszcze znana');
      return;
    }

    const found = preparedUserBets.find((match) => match.matchId === matchId);
    if (!found) {
      addBet(team1.name, team1.id, team2.name, team2.id, bet, course, matchId, date);
    }
    if (found && found.matchId === matchId && found.bet !== bet) {
      deleteBet(matchId);
      addBet(team1.name, team1.id, team2.name, team2.id, bet, course, matchId, date);
    } else if (found && found.matchId === matchId && found.bet === bet) {
      deleteBet(matchId);
    }
  };
  const saveToLocalStorage = React.useCallback(() => {
    if (preparedUserBets.length) {
      window.localStorage.setItem('preparedUserBets', JSON.stringify(preparedUserBets));
    }
  }, [preparedUserBets]);

  React.useEffect(() => {
    return () => {
      saveToLocalStorage();
    };
  }, [preparedUserBets]);
  return (
    <BoxWrapper>
      <LeftColumnWrapper>
        <DateBox>
          <div>
            <Hour>{new Date(date).toLocaleTimeString().slice(0, -3)}</Hour>
            <Day>{new Date(date).toLocaleDateString()}</Day>
          </div>
          <TournamentName>{event.name}</TournamentName>
        </DateBox>
        <TeamsBox>
          <StarsWrapper>{starsDiv}</StarsWrapper>
          <Team>
            <TeamLogo src={`https://static.hltv.org/images/team/logo/${team1.id}`} />
            <TeamName>{team1.name}</TeamName>
          </Team>
          <Team>
            <TeamLogo src={`https://static.hltv.org/images/team/logo/${team2.id}`} />
            <TeamName>{team2.name}</TeamName>
          </Team>
        </TeamsBox>
      </LeftColumnWrapper>
      <ButtonsWrapper>
        <BetButton
          backgroundSrc={`https://static.hltv.org/images/team/logo/${team1.id}`}
          isActive={preparedUserBets.some((a) => a.matchId === id && a.bet === 1)}
          isFirst={true}
          onClick={() => handleActive(team1, team2, 1, firstTeamCourse, id, date)}
        >
          <ButtonSpan>{firstTeamCourse}</ButtonSpan>
          <ButtonSpan>{team1.name}</ButtonSpan>
        </BetButton>
        <BetButton
          backgroundSrc={`https://static.hltv.org/images/team/logo/${team2.id}`}
          isActive={preparedUserBets.some((a) => a.matchId === id && a.bet === 2)}
          isFirst={false}
          onClick={() => handleActive(team1, team2, 2, secondTeamCourse, id, date)}
        >
          <ButtonSpan>{secondTeamCourse}</ButtonSpan>
          <ButtonSpan>{team2.name}</ButtonSpan>
        </BetButton>
      </ButtonsWrapper>
    </BoxWrapper>
  );
};
export default SingleBetBox;
