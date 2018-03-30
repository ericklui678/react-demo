export const EDIT_PLAYER = 'edit_player';

export function editPlayer(playerData) {
  return {
    type: EDIT_PLAYER,
    payload: playerData
  }
}
