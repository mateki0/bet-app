import styled from 'styled-components';

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 20px 0;
  height: 100%;
  @media only screen and (min-width: 1024px) {
    margin-top: -50px;
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export default MainContent;
