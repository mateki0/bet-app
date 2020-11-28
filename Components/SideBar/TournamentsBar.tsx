import * as React from 'react';
import LeftBarContainer from './styled/LeftBarContainer';
import SideButton from './styled/SideButton';
import SideHeading from './styled/SideHeading';
import SideItem from './styled/SideItem';
import SideItemsList from './styled/SideItemsList';
import { EventsProps } from 'pages';

const TournamentsBar = ({ events, isOpen }: EventsProps & { isOpen: boolean }) => {
  if (events) {
    return (
      <LeftBarContainer isOpen={isOpen}>
        <SideHeading>Trwające turnieje</SideHeading>
        <SideItemsList>
          {events.map(({ id, name }) => (
            <SideItem key={id}>
              <SideButton href={`/events${id}`}>{name}</SideButton>
            </SideItem>
          ))}
        </SideItemsList>
      </LeftBarContainer>
    );
  }
  return (
    <LeftBarContainer isOpen={isOpen}>
      <SideHeading>Żaden turniej nie jest aktualnie rozgrywany</SideHeading>
    </LeftBarContainer>
  );
};

export default TournamentsBar;
