import players from '../players.json';
import { EDIT_PLAYER } from '../actions/';

export default function (state = players, action) {
  switch (action.type) {
    case EDIT_PLAYER:
      const { name, region, playerIdx } = action.payload;
      let newState = state.slice();

      newState[playerIdx].name = name;
      newState[playerIdx].regions = [region];
      return newState;
    default:
      return state;
  }
}
