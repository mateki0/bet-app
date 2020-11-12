import * as React from 'react';
import BetButton from './styled/BetButton';
import BoxWrapper from './styled/BoxWrapper';
import ButtonSpan from './styled/ButtonSpan';
import ButtonsWrapper from './styled/ButtonsWrapper';
import DateBox from './styled/DateBox';
import Day from './styled/Day';
import Hour from './styled/Hour';
import Team from './styled/Team';
import TeamLogo from './styled/TeamLogo';
import TeamName from './styled/TeamName';
import TeamsBox from './styled/TeamsBox';
import TournamentName from './styled/TournamentName';

interface BoxProps {
  team1?: string;
  team2?: string;
  date?: string;
  team1Course?: number;
  team2Course?: number;
  eventName?: string;
}
const SingleBetBox = ({ team1, team2, date, team1Course, team2Course, eventName }: BoxProps) => {
  return (
    <BoxWrapper>
      <div>
        <DateBox>
          <div>
            <Hour>18:00</Hour>
            <Day>12.11.2020</Day>
          </div>
          <TournamentName>Flashpoint</TournamentName>
        </DateBox>
        <TeamsBox>
          <Team>
            <TeamLogo />
            <TeamName>Virtus Pro</TeamName>
          </Team>
          <Team>
            <TeamLogo />
            <TeamName>Natus Vincere</TeamName>
          </Team>
        </TeamsBox>
      </div>
      <ButtonsWrapper>
        <BetButton>
          <ButtonSpan>1.62</ButtonSpan>
          <ButtonSpan>Virtus Pro</ButtonSpan>
        </BetButton>
        <BetButton>
          <ButtonSpan>2.02</ButtonSpan>
          <ButtonSpan>Natus Vincere</ButtonSpan>
        </BetButton>
      </ButtonsWrapper>
    </BoxWrapper>
  );
};
export default SingleBetBox;
