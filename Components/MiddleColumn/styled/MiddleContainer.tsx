import styled from 'styled-components';

const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 15px;
  @media only screen and (min-width: 1024px) {
    max-height: 1000px;
  }
`;
export default MiddleContainer;
