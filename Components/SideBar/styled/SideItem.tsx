import styled from 'styled-components';

const SideItem = styled.li<{ isRight?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isRight ? 'column' : 'row')};
  justify-content: ${(props) => (props.isRight ? 'center' : 'space-between')};
  padding: 5px 20px;
  color: #fff;
  transition: all 0.2s;
  font-size: 18px;
  &:not(:first-child) {
    margin-top: ${(props) => (!props.isRight ? '30px' : '0')};
  }
`;
export default SideItem;
