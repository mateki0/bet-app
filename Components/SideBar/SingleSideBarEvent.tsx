import * as React from 'react';
import EventTime from './styled/EventTime';
import SideBarDropdown from './styled/SideBarDropdown';

type EventProps = {
  dateStart: number;
  dateEnd: number;
};
const SingleSideBarEvent = ({ dateStart, dateEnd }: EventProps) => {
  return (
    <SideBarDropdown>
      <div>
        <h4>Data rozpoczęcia turnieju:</h4>
        <EventTime>{new Date(dateStart).toLocaleDateString()}</EventTime>
      </div>
      <div>
        <h4>Data zakończenia turnieju:</h4>
        <EventTime>{new Date(dateEnd).toLocaleDateString()}</EventTime>
      </div>
    </SideBarDropdown>
  );
};

export default SingleSideBarEvent;
