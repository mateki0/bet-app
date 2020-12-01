import styled from 'styled-components';

const SideButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #fff;
    margin-left: 5px;
  }
`;

export default SideButton;
