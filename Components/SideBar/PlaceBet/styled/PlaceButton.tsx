import styled from 'styled-components';

const PlaceButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #fff;
  width: 50%;
  color: #000;
  font-size: 18px;
  padding: 10px;
  margin-top: 20px;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
export default PlaceButton;
