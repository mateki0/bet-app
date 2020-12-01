import * as React from 'react';
import LeftBarContainer from './styled/LeftBarContainer';
import SideButton from './styled/SideButton';
import SideHeading from './styled/SideHeading';
import SideItem from './styled/SideItem';
import SideItemsList from './styled/SideItemsList';
import { EventsProps } from 'pages';
import { SideBarsContext } from 'Contexts/SideBarsContext';
import SingleSideBarEvent from './SingleSideBarEvent';
const TournamentsBar = ({ events }: EventsProps) => {
  const { isLeftBarOpen } = React.useContext(SideBarsContext);
  if (events) {
    return (
      <LeftBarContainer isOpen={isLeftBarOpen}>
        <SideHeading>Trwające turnieje</SideHeading>
        <SideItemsList>
          {events.map(({ id, name, dateStart, dateEnd }) => (
            <div key={id}>
              <SideItem>
                <SideButton>{name}</SideButton>
              </SideItem>

              <SingleSideBarEvent dateStart={dateStart} dateEnd={dateEnd} />
            </div>
          ))}
        </SideItemsList>
      </LeftBarContainer>
    );
  }
  return (
    <LeftBarContainer isOpen={isLeftBarOpen}>
      <SideHeading>Żaden turniej nie jest aktualnie rozgrywany</SideHeading>
    </LeftBarContainer>
  );
};

export default TournamentsBar;
