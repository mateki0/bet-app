import styled from 'styled-components';

const BetButton = styled.button<{ backgroundSrc: string; isActive: boolean; isFirst: boolean }>`
  position: relative;

  background-color: ${(props) =>
    (props.isActive && props.isFirst) || (props.isActive && !props.isFirst)
      ? 'rgba(3, 252, 11, 0.2)'
      : 'transparent'};
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  width: 110px;
  &:hover {
    cursor: pointer;
  }

  ::after {
    content: '';
    background-image: url(${(props) => props.backgroundSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    right: 0;
    z-index: -1;
  }
`;
export default BetButton;
