import styled from 'styled-components';

const Boxes = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Boxes;
