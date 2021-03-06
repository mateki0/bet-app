import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 8px 8px 3px 1px rgba(0, 0, 0, 0.4);
  width: 80%;
  padding: 18px 0;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export default StyledButton;
