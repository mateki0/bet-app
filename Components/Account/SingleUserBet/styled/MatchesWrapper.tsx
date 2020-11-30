import styled from 'styled-components';

const MatchesWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  transition: all 2s;
  flex-direction: column;
  margin-top: ${(props) => (props.isOpen ? '20px' : '0')};
  > .my-dropdown-slidedown {
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.4, 0.7, 1, 0.4);
  }
`;
export default MatchesWrapper;
