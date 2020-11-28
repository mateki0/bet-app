import SingleBetBox from 'Components/SingleBetBox';
import { MatchesProps } from 'pages';
import * as React from 'react';
import MiddleContainer from './styled/MiddleContainer';
import OpenSideBar from './styled/OpenSideBar';
import Chevron from '../../assets/icons/chevron.svg';
import Boxes from './styled/Boxes';
import MoreMatches from './styled/MoreMatches';
import LastThreads from './styled/LastThreads';
import ThreadTitle from './styled/ThreadTitle';
import ThreadText from './styled/ThreadText';
import ThreadsWrapper from './styled/ThreadsWrapper';
import ContentWrapper from './styled/ContentWrapper';

interface MiddleProps {
  setIsLeftBarOpen: () => void;
  setIsRightBarOpen: () => void;
  isLeftBarOpen: boolean;
  isRightBarOpen: boolean;
}
const MiddleColumn = ({
  matches,
  setIsLeftBarOpen,
  setIsRightBarOpen,
  isLeftBarOpen,
  isRightBarOpen,
}: MatchesProps & MiddleProps) => {
  return (
    <MiddleContainer>
      <OpenSideBar isLeft onClick={setIsLeftBarOpen} isLeftBarOpen={isLeftBarOpen}>
        <Chevron />
      </OpenSideBar>
      <OpenSideBar onClick={setIsRightBarOpen} isRightBarOpen={isRightBarOpen}>
        <Chevron />
      </OpenSideBar>
      <ContentWrapper isLeftBarOpen={isLeftBarOpen} isRightBarOpen={isRightBarOpen}>
        <Boxes>
          {matches.map((match) => (
            <SingleBetBox match={match} key={match.id} />
          ))}
        </Boxes>
        <MoreMatches href="/">Więcej meczy</MoreMatches>
        <ThreadsWrapper>
          <LastThreads>
            <ThreadTitle>Lorem Ipsum</ThreadTitle>
            <ThreadText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu metus pretium,
              venenatis leo ac, tempus mauris. Curabitur placerat euismod magna sodales pretium.
              Vestibulum ullamcorper tellus molestie congue pharetra. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eleifend,
              ligula sed commodo dignissim, nibh ipsum pretium justo, et aliquet ante elit sit amet
              risus. Maecenas vestibulum, enim quis aliquet fringilla, erat leo ultrices dolor, vel
              blandit sem nulla condimentum nulla. Praesent ligula sem, tempor ac quam consectetur,
              dignissim placerat quam. Morbi non porttitor dolor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris eu metus pretium, venenatis leo ac, tempus mauris.
              Curabitur placerat euismod magna sodales pretium. Vestibulum ullamcorper tellus
              molestie congue pharetra. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Morbi eleifend, ligula sed commodo dignissim, nibh
              ipsum pretium justo, et aliquet ante elit sit amet risus. Maecenas vestibulum, enim
              quis aliquet fringilla, erat leo ultrices dolor, vel blandit sem nulla condimentum
              nulla. Praesent ligula sem, tempor ac quam consectetur, dignissim placerat quam. Morbi
              non porttitor dolor.
            </ThreadText>
          </LastThreads>
        </ThreadsWrapper>
      </ContentWrapper>
    </MiddleContainer>
  );
};

export default MiddleColumn;
