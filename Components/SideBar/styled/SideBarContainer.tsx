import styled from 'styled-components';

const SideBarContainer = styled.section<{ isLeft?: boolean }>`
  border-top-right-radius: ${(props) => (props.isLeft ? '25px' : '0')};
  border-top-left-radius: ${(props) => (!props.isLeft ? '25px' : '0')};
  border: none;
  background-color: #233f80;
  width: 100%;
  height: 100vh;
`;
export default SideBarContainer;
