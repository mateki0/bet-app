import * as React from 'react';
import Layout from 'Components/Layout';
import MiddleColumn from 'Components/MiddleColumn';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import HLTV from 'hltv';
import TournamentsBar from 'Components/SideBar/TournamentsBar';
import BetsBar from 'Components/SideBar/BetsBar';

import HomePage from 'Components/Layout/styled/HomePage';
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

const Home = ({ matches, events }: MatchesProps & EventsProps) => {
  matches.sort((a, b) => {
    if (a.stars === b.stars) {
      return a.date - b.date;
    }
    return b.stars - a.stars;
  });

  const filteredMatches = matches.filter((a) => a.team1 !== undefined && !a.live);
  return (
    <Layout>
      <HomePage>
        <TournamentsBar events={events} />
        <MiddleColumn matches={filteredMatches.slice(0, 10)} />
        <BetsBar />
      </HomePage>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const matches = await HLTV.getMatches();
  const events = await HLTV.getOngoingEvents();
  return {
    props: {
      matches: JSON.parse(JSON.stringify(matches)),
      events: JSON.parse(JSON.stringify(events)),
    },
  };
};
export default Home;
