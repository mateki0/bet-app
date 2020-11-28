import styled from 'styled-components';

const DeleteButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
export default DeleteButton;
