import * as React from 'react';
import ChevronContainer from './styled/ChevronContainer';
import SideBarContainer from './styled/SideBarContainer';
import SideButton from './styled/SideButton';
import SideHeading from './styled/SideHeading';
import SideItem from './styled/SideItem';
import SideItemsList from './styled/SideItemsList';
import Chevron from '../../assets/icons/chevron.svg';

interface SideBarProps {
  isLeft?: boolean;
  headingText: string;
}
const SideBar = ({ isLeft, headingText }: SideBarProps) => {
  return (
    <SideBarContainer isLeft={isLeft}>
      <SideHeading>{headingText}</SideHeading>
      <SideItemsList>
        <SideItem>
          <SideButton>First Event</SideButton>
          <ChevronContainer>
            <Chevron width="16px" height="16px" fill="#fff" />
          </ChevronContainer>
        </SideItem>
        <SideItem>
          <SideButton>First Event</SideButton>
          <ChevronContainer>
            <Chevron width="16px" height="16px" fill="#fff" />
          </ChevronContainer>
        </SideItem>
        <SideItem>
          <SideButton>First Event</SideButton>
          <ChevronContainer>
            <Chevron width="16px" height="16px" fill="#fff" />
          </ChevronContainer>
        </SideItem>
      </SideItemsList>
    </SideBarContainer>
  );
};

export default SideBar;
