import styled from 'styled-components';

const MoreMatches = styled.a`
  margin-top: 50px;
  text-align: center;
  padding: 30px 30px;
  font-size: 36px;
  font-weight: bold;
  border: none;
  background-color: #f5f5f5;
  box-shadow: 8px 8px 4px 1px #cecece;
  color: #000;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 0 0 #cecece;
  }
`;

export default MoreMatches;
