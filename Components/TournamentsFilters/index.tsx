import * as React from 'react';
import ActiveTournament from './styled/ActiveTournament';
import DropdownButton from './styled/DropdownButton';
import FiltersContainer from './styled/FiltersContainer';
import TournamentList from './styled/TournamentsList';
import { SlideDown } from 'react-slidedown';
type TournamentsFiltersProps = {
  activeTournaments?: string[];
  handleSelectEvent: (e: { currentTarget: { innerText: React.SetStateAction<string> } }) => void;
  selectedEvent: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (e: boolean) => void;
};
const TournamentsFilters = ({
  activeTournaments,
  handleSelectEvent,
  selectedEvent,
  isDropdownOpen,
  setIsDropdownOpen,
}: TournamentsFiltersProps) => {
  return (
    <FiltersContainer>
      <h2>Wybierz turniej</h2>
      <ActiveTournament
        isDropdownOpen={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedEvent}
      </ActiveTournament>

      <TournamentList>
        <SlideDown className="my-filters-slidedown">
          {isDropdownOpen ? (
            <>
              <li>
                <DropdownButton onClick={handleSelectEvent}>Wszystkie</DropdownButton>
              </li>
              {activeTournaments.map((tournament) => (
                <li key={tournament}>
                  <DropdownButton onClick={handleSelectEvent}>{tournament}</DropdownButton>
                </li>
              ))}
            </>
          ) : (
            ''
          )}
        </SlideDown>
      </TournamentList>
    </FiltersContainer>
  );
};

export default TournamentsFilters;
