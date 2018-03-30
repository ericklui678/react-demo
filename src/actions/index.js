import players from '../players.json';

export const FETCH_PLAYERS = 'fetch_players';

export function fetchPlayers() {
  return {
    type: FETCH_PLAYERS,
    payload: players
  };
}
