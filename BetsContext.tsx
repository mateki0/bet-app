import * as React from 'react';

const initialState = [];

type PreparedUserBets = {
  team1Name: string;
  team2Name: string;
  team1Id: number;
  team2Id: number;
  bet: number;
  course: number;
  matchId: number;
  date: number;
};
type ContextTypes = {
  preparedUserBets: PreparedUserBets[];
  addBet: (
    team1Name: string,
    team1Id: number,
    team2Name: string,
    team2Id: number,
    bet: number,
    course: number,
    matchId: number,
    date: number
  ) => void;
  deleteBet: (matchId: number) => void;
};
export const BetsContext = React.createContext<ContextTypes | undefined>(undefined);

const ADD_BET = 'ADD_BET';
const DELETE_BET = 'DELETE_BET';

const reducer = (state, action) => {
  if (action.type === ADD_BET) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_BET) {
    return state.filter((item) => item.matchId !== action.payload.matchId);
  }
};
export const BetsProvider = ({ children }) => {
  const [preparedUserBets, dispatch] = React.useReducer(reducer, initialState);

  const addBet = React.useCallback(
    (team1Name, team1Id, team2Name, team2Id, bet, course, matchId, date) => {
      dispatch({
        type: ADD_BET,
        payload: {
          team1Name,
          team1Id,
          team2Name,
          team2Id,
          bet,
          course,
          matchId,
          date,
        },
      });
    },
    [dispatch]
  );

  const deleteBet = React.useCallback(
    (matchId) => {
      dispatch({
        type: DELETE_BET,
        payload: {
          matchId,
        },
      });
    },
    [dispatch]
  );

  const value = { preparedUserBets, addBet, deleteBet };
  return <BetsContext.Provider value={value}>{children}</BetsContext.Provider>;
};
