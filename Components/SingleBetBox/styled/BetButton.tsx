import styled from 'styled-components';

const BetButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  width: 110px;
  &:hover {
    cursor: pointer;
  }
`;
export default BetButton;
