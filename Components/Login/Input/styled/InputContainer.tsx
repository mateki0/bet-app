import styled from 'styled-components';

const InputContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    width: 50%;
    margin: 0;
  }
`;

export default InputContainer;
