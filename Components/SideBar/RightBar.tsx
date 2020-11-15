import * as React from 'react';
import RightBarContainer from './styled/RightBarContainer';
import SideHeading from './styled/SideHeading';
import SideItem from './styled/SideItem';
import SideItemsList from './styled/SideItemsList';
import { PlayersProps } from 'pages';
import PlayerNick from './styled/PlayerNick';

const RightBar = ({ players, isOpen }: PlayersProps & { isOpen: boolean }) => {
  return (
    <RightBarContainer isOpen={isOpen}>
      <SideHeading>Najlepsi gracze</SideHeading>
      <SideItemsList>
        {players.map(({ name, id, rating }) => (
          <SideItem key={id} isRight>
            <PlayerNick href={`players/${id}`}>Nick: {name}</PlayerNick>
            <span>Rating: {rating}</span>
          </SideItem>
        ))}
      </SideItemsList>
    </RightBarContainer>
  );
};

export default RightBar;
