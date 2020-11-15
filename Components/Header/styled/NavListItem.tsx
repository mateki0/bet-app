import styled from 'styled-components';

const NavListItem = styled.li`
  padding: 10px 0;
  > * {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    font-weight: medium;
  }
  &:not(:last-child) {
    margin-right: 4vw;
  }
  @media only screen and (min-width: 1024px) {
    > * {
      font-size: 18px;
    }
  }
`;

export default NavListItem;
