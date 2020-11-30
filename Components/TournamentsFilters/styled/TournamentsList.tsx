import styled from 'styled-components';

const TournamentList = styled.ul`
  width: 400px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  z-index: 999;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  > .my-filters-slidedown {
    transition-duration: 0.6s;
  }
`;

export default TournamentList;
