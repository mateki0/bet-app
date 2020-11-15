import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 50%;
  height: 100%;

  ::after {
    content: '';
    background-image: url('/images/major.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export default Form;
