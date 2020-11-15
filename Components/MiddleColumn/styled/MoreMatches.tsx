import styled from 'styled-components';

const MoreMatches = styled.a`
  margin-top: 50px;
  text-align: center;
  align-self: center;
  padding: 30px 0;
  font-size: 36px;
  font-weight: bold;
  width: 80%;
  border: none;
  background-color: #f5f5f5;
  box-shadow: 8px 8px 4px 1px #cecece;
  color: #000;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 0 0 #cecece;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export default MoreMatches;
