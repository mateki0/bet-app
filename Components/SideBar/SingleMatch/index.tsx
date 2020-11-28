import DeleteButton from 'Components/SideBar/SingleMatch/styled/DeleteButton';
import PreparedBetWrapper from 'Components/SideBar/SingleMatch/styled/PreparedBetWrapper';
import TeamsWrapper from 'Components/SideBar/SingleMatch/styled/TeamsWrapper';
import * as React from 'react';
import { BetsContext } from 'BetsContext';
import DeleteButtonWrapper from 'Components/SideBar/SingleMatch/styled/DeleteButtonWrapper';
import DateDiv from './styled/DateDiv';
import Link from 'next/link';

import TeamDiv from './styled/TeamDiv';
type SingleBetProps = {
  team1Name: string;
  team2Name: string;
  team1Id: number;
  team2Id: number;
  bet: number;
  course: number;
  matchId?: number;
  date?: number;
};
const SingleMatch = ({
  team1Name,
  team1Id,
  team2Name,
  team2Id,
  bet,
  course,
  matchId,
  date,
}: SingleBetProps) => {
  const { deleteBet } = React.useContext(BetsContext);

  return (
    <PreparedBetWrapper>
      <DateDiv>
        <h3>{new Date(date).toLocaleTimeString().slice(0, -3)}</h3>
        <h6>{new Date(date).toLocaleDateString()}</h6>
      </DateDiv>
      <TeamsWrapper>
        <TeamDiv
          backgroundSrc={`https://static.hltv.org/images/team/logo/${team1Id}`}
          isActive={bet === 1}
          isFirst={true}
        >
          <Link href={`team/${team1Id}`}>{team1Name}</Link>
          <span>{bet === 1 ? course : ''}</span>
        </TeamDiv>
        <TeamDiv
          backgroundSrc={`https://static.hltv.org/images/team/logo/${team2Id}`}
          isActive={bet === 2}
          isFirst={false}
        >
          <Link href={`team/${team2Id}`}>{team2Name}</Link>
          <span>{bet === 2 ? course : ''}</span>
        </TeamDiv>
      </TeamsWrapper>
      <DeleteButtonWrapper isVisible={matchId !== undefined}>
        <DeleteButton onClick={() => deleteBet(matchId)}>Usuń zakład</DeleteButton>
      </DeleteButtonWrapper>
    </PreparedBetWrapper>
  );
};

export default SingleMatch;
