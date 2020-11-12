import SingleBetBox from 'Components/SingleBetBox';
import * as React from 'react';
import MiddleContainer from './styled/MiddleContainer';

const MiddleColumn = () => {
  return (
    <MiddleContainer>
      <SingleBetBox />
      <SingleBetBox />
    </MiddleContainer>
  );
};

export default MiddleColumn;
