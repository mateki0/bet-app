import styled from 'styled-components';

const ContentWrapper = styled.div<{ isLeftBarOpen: boolean; isRightBarOpen: boolean }>`
  display: ${(props) => (props.isLeftBarOpen || props.isRightBarOpen ? 'none' : 'grid')};
  justify-items: center;
`;
export default ContentWrapper;
