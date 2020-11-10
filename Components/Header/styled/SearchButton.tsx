import styled from 'styled-components';

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export default SearchButton;
