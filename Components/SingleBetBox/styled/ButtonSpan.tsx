import styled from 'styled-components';

const ButtonSpan = styled.span`
  font-size: 12px;

  &:first-of-type {
    align-self: flex-end;
  }
  &:nth-of-type(2) {
    align-self: flex-start;
  }
`;
export default ButtonSpan;
