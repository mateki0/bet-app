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
  };
}
const SingleBetBox = ({ match }: BoxProps) => {
  const { date, team1, team2, stars, event } = match;

  const starsDiv = [];
  for (let i = 0; i <= stars; i++) {
    starsDiv.push(<Star width="12px" height="12px" key={i} />);
  }
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
        <BetButton backgroundSrc={`https://static.hltv.org/images/team/logo/${team1.id}`}>
          <ButtonSpan>1.62</ButtonSpan>
          <ButtonSpan>{team1.name}</ButtonSpan>
        </BetButton>
        <BetButton backgroundSrc={`https://static.hltv.org/images/team/logo/${team2.id}`}>
          <ButtonSpan>2.02</ButtonSpan>
          <ButtonSpan>{team2.name}</ButtonSpan>
        </BetButton>
      </ButtonsWrapper>
    </BoxWrapper>
  );
};
export default SingleBetBox;
