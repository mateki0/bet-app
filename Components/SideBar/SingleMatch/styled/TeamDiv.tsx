import styled from 'styled-components';

const TeamDiv = styled.div<{ backgroundSrc: string; isActive: boolean; isFirst: boolean }>`
  position: relative;

  background-color: ${(props) =>
    (props.isActive && props.isFirst) || (props.isActive && !props.isFirst)
      ? 'rgba(3,252,11,0.4)'
      : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  padding: 10px 0;
  width: 150px;

  > * {
    font-weight: bold;
    :first-child {
      font-size: 16px;

      margin-left: ${(props) => (props.isActive ? '10px' : '0')};
    }
    :nth-child(2) {
      font-size: 14px;
      margin-right: 10px;
    }
    :nth-child(even) {
      align-self: ${(props) => (props.isActive ? 'flex-end' : 'center')};
    }
    :nth-child(odd) {
      align-self: ${(props) => (props.isActive ? 'flex-start' : 'center')};
    }
    color: #000;
  }

  ::after {
    content: '';
    background-image: url(${(props) => props.backgroundSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  @media only screen and (min-width: 1024px) {
    margin: 10px 0;
  }
`;
export default TeamDiv;
