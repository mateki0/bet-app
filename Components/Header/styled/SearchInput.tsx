import styled from 'styled-components';

const SearchInput = styled.input`
  width: 80vw;
  padding: 10px 0 10px 10px;
  border: none;
  border-radius: 8px;
  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
`;
export default SearchInput;
