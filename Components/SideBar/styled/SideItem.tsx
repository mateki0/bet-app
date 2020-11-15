import styled from 'styled-components';

const SideItem = styled.li<{ isRight?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isRight ? 'column' : 'row')};
  justify-content: ${(props) => (props.isRight ? 'center' : 'space-between')};
  padding: 0 20px;
  color: #fff;
  transition: all 0.2s;
  font-size: 18px;
  &:not(:first-child) {
    margin-top: 30px;
  }
`;
export default SideItem;
