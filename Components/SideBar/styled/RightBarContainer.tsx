import Boxes from 'Components/MiddleColumn/styled/Boxes';
import styled from 'styled-components';

const RightBarContainer = styled.section<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  border: none;
  background-color: #233f80;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  padding-bottom: 50px;
  z-index: 2;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.33, 0.66, 0.75, 0.75);
  @media only screen and (min-width: 1280px) {
    position: initial;
    overflow-y: hidden;
    border-top-left-radius: 25px;
    width: 100%;
    height: 100%;
  }
`;
export default RightBarContainer;
