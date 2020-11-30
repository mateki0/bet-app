import Layout from 'Components/Layout';
import BetsBar from 'Components/SideBar/BetsBar';
import * as React from 'react';
import HLTV from 'hltv';
import { GetStaticProps } from 'next';
import { MatchesProps } from 'pages';
import MiddleColumn from 'Components/MiddleColumn';
import MatchesPageWrapper from 'Components/Matches/styled/MatchesPageWrapper';
import TournamentsFilters from 'Components/TournamentsFilters';

const MatchesPage = ({ matches }: MatchesProps) => {
  const [selectedEvent, setSelectedEvent] = React.useState('Wszystkie');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const handleSelectEvent = (e: { currentTarget: { innerText: React.SetStateAction<string> } }) => {
    setSelectedEvent(e.currentTarget.innerText);
    setIsDropdownOpen(false);
  };
  const filteredMatches = matches.filter((a) => a.team1 !== undefined && !a.live);

  const activeTournaments = filteredMatches.map((a) => a.event.name);
  const uniqueTournaments = Array.from(new Set(activeTournaments));
  return (
    <Layout>
      <TournamentsFilters
        activeTournaments={uniqueTournaments}
        handleSelectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <MatchesPageWrapper>
        <MiddleColumn
          matches={
            selectedEvent === 'Wszystkie'
              ? filteredMatches
              : filteredMatches.filter((a) => a.event.name === selectedEvent)
          }
        />
        <BetsBar />
      </MatchesPageWrapper>
    </Layout>
  );
};
export default MatchesPage;
export const getStaticProps: GetStaticProps = async () => {
  const matches = await HLTV.getMatches();

  return {
    props: {
      matches: JSON.parse(JSON.stringify(matches)),
    },
  };
};
