import styled from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
  background: #233f80;
  background: linear-gradient(
    to bottom,
    #233f80 0%,
    #457cfb 100%,
    #2989d8 100%,
    #207cca 100%,
    #7db9e8 100%
  );
  @media only screen and (min-width: 1024px) {
    height: 300px;
    width: 100%;
    clip-path: polygon(0% 57%, 10% 68%, 92% 33%, 100% 22%, 100% 0%, 0% 0%);
    background: #233f80;
    background: linear-gradient(
      to bottom,
      #233f80 0%,
      #457cfb 100%,
      #2989d8 100%,
      #207cca 100%,
      #7db9e8 100%
    );
  }
`;
export default Navigation;
