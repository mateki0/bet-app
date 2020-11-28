import styled from 'styled-components';

const DeleteButtonWrapper = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'initial' : 'none')};
  align-self: center;
`;
export default DeleteButtonWrapper;
