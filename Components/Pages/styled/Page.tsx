import styled from 'styled-components';

const Page = styled.li<{ isActive: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  box-shadow: ${(props) => (props.isActive ? 'none' : '2px 2px 3px 2px #7a7a7a')};
  background-color: ${(props) => (props.isActive ? '#000' : '#FFF')};
  color: ${(props) => (props.isActive ? '#FFF' : '#000')};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: none;
    background-color: #000;
    color: #fff;
  }
`;
export default Page;
