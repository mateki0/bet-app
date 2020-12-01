import styled from 'styled-components';

const Boxes = styled.div<{ isMatchesPage: boolean }>`
  display: grid;
  width: 100%;
  justify-items: center;
  gap: 20px;
  padding-bottom: ${(props) => (props.isMatchesPage ? '20px' : '0')};
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: ${(props) => (props.isMatchesPage ? '1fr 1fr 1fr' : '1fr 1fr')};
  }
`;

export default Boxes;
