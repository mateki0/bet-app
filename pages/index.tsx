import * as React from 'react';
import Layout from 'Components/Layout';
import MiddleColumn from 'Components/MiddleColumn';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import HLTV from 'hltv';
import LeftBar from 'Components/SideBar/LeftBar';
import RightBar from 'Components/SideBar/RightBar';
export interface MatchesProps {
  matches: {
    id: number;
    date: number;
    team1: {
      name: string;
      id: number;
    };
    team2: {
      name: string;
      id: number;
    };
    format: string;
    title: string | undefined;
    event: { name: string; id: number } | undefined;
    stars: number;
    live: boolean;
  }[];
}
interface SingleEvent {
  id: number;
  name: string;
  dateStart: number;
  dateEnd: number;
  featured: boolean;
  today: boolean;
}
export interface EventsProps {
  events?: SingleEvent[];
}
export interface PlayersProps {
  players: {
    id: number;
    name: string;
    rating: number;
  }[];
}

const Home = ({ matches, events, players }: MatchesProps & EventsProps & PlayersProps) => {
  const [isLeftBarOpen, setIsLeftBarOpen] = React.useState(false);
  const [isRightBarOpen, setIsRightBarOpen] = React.useState(false);
  matches.sort((a, b) => {
    if (a.stars === b.stars) {
      return a.date - b.date;
    }
    return b.stars - a.stars;
  });
  const toggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
    setIsRightBarOpen(false);
  };
  const toggleRightBar = () => {
    setIsRightBarOpen(!isRightBarOpen);
    setIsLeftBarOpen(false);
  };

  const filteredMatches = matches.filter((a) => a.team1 !== undefined && !a.live);
  return (
    <Layout>
      <LeftBar events={events} isOpen={isLeftBarOpen} />
      <MiddleColumn
        matches={filteredMatches.slice(0, 10)}
        setIsLeftBarOpen={toggleLeftBar}
        setIsRightBarOpen={toggleRightBar}
        isRightBarOpen={isRightBarOpen}
        isLeftBarOpen={isLeftBarOpen}
      />
      <RightBar players={players} isOpen={isRightBarOpen} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const matches = await HLTV.getMatches();
  const events = await HLTV.getOngoingEvents();
  const players = await (await HLTV.getPlayerRanking({ startDate: '2020-01-01' })).slice(0, 15);
  return {
    props: {
      matches: JSON.parse(JSON.stringify(matches)),
      events: JSON.parse(JSON.stringify(events)),
      players: JSON.parse(JSON.stringify(players)),
    },
  };
};
export default Home;
