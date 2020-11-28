import styled from 'styled-components';

const HomePage = styled.div`
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
export default HomePage;
