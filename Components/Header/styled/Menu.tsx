import styled from 'styled-components';

const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

export default Menu;
