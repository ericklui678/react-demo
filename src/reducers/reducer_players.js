import players from '../players.json';
import { EDIT_PLAYER, DELETE_PLAYER } from '../actions/';

export default function (state = players, action) {
  switch (action.type) {
    case EDIT_PLAYER:
      const { name, region, playerIdx } = action.payload;
      let newState = state.slice();

      newState[playerIdx].name = name;
      newState[playerIdx].regions = [region];
      return newState;
    case DELETE_PLAYER:
      let idx = action.payload.idx;
      let updatedState = state.slice();
      updatedState.splice(idx, 1);
      action.payload.callback();
      return updatedState;
    default:
      return state;
  }
}
