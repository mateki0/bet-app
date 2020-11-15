import styled from 'styled-components';

const LogoutButton = styled.button`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: medium;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export default LogoutButton;
