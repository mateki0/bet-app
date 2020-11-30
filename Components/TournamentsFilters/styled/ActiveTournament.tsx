import styled from 'styled-components';

const ActiveTournament = styled.button<{ isDropdownOpen: boolean }>`
  width: 400px;
  padding: 10px 0;
  background-color: #233f80;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border: none;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: ${(props) => (props.isDropdownOpen ? '0' : '5px')};
  border-bottom-right-radius: ${(props) => (props.isDropdownOpen ? '0' : '5px')};
  &:hover {
    cursor: pointer;
  }
`;
export default ActiveTournament;
