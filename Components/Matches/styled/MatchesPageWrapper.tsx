import styled from 'styled-components';

const MatchesPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 3fr 1fr;
  }
`;
export default MatchesPageWrapper;
