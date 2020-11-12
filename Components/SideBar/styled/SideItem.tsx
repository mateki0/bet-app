import styled from 'styled-components';

const SideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
export default SideItem;
