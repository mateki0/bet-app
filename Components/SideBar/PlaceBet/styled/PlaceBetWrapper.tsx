import styled from 'styled-components';

const PlaceBetWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default PlaceBetWrapper;
