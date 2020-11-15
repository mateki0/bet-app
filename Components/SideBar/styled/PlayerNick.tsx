import styled from 'styled-components';

const PlayerNick = styled.a`
  color: #fff;
  padding: 10px;
  white-space: nowrap;
  &:first-of-type {
    padding-top: 0;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default PlayerNick;
