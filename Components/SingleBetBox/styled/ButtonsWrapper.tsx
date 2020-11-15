import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    margin-right: 20px;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
`;
export default ButtonsWrapper;
