import styled from 'styled-components';

const NavListItem = styled.li`
  padding: 10px 0;

  &:not(:last-child) {
    margin-right: 4vw;
  }
  > * {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default NavListItem;
