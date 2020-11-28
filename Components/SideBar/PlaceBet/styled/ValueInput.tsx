import styled from 'styled-components';

const ValueInput = styled.input`
  width: 60px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
export default ValueInput;
