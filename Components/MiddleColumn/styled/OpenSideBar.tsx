import styled from 'styled-components';

const OpenSideBar = styled.button<{
  isLeft?: boolean;
  isLeftBarOpen?: boolean;
  isRightBarOpen?: boolean;
}>`
  padding: 0;
  position: fixed;
  top: 30%;
  left: ${(props) => (props.isLeft ? '0' : 'initial')};
  right: ${(props) => (!props.isLeft ? '0' : 'initial')};
  align-self: start;
  z-index: 99;
  background-color: transparent;
  border: none;
  > * {
    width: 14px;
    height: 14px;
  }
  :first-of-type {
    > * {
      transition: all 0.3s;
      transform: ${(props) => (props.isLeftBarOpen ? 'rotate(90deg)' : 'rotate(270deg)')};
      fill: ${(props) => (props.isLeftBarOpen ? '#fff' : '#000')};
    }
  }
  :nth-of-type(2) {
    > * {
      transition: all 0.3s;
      transform: ${(props) => (props.isRightBarOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
      fill: ${(props) => (props.isRightBarOpen ? '#fff' : '#000')};
    }
  }
  @media only screen and (min-width: 768px) {
    > * {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1280px) {
    display: none;
    visibility: none;
    opacity: 0;
  }
`;
export default OpenSideBar;
