import styled from 'styled-components';

const AccountContainer = styled.section`
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1024px) {
    padding: 0 20px;
    grid-template-columns: 1fr 1fr;
  }
`;
export default AccountContainer;
