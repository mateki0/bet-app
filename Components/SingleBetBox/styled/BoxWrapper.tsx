import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: 90%;
  min-height: 180px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default BoxWrapper;
