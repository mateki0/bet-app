import styled from 'styled-components';

const ShowAllButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 2px 2px 8px 2px #7a7a7a;
  align-self: center;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
    box-shadow: none;
    cursor: pointer;
  }
`;
export default ShowAllButton;
