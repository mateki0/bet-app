import styled from 'styled-components';

const SingleBetValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default SingleBetValueWrapper;
