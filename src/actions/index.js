export const EDIT_PLAYER = 'edit_player';

export function editPlayer(id) {
  return {
    type: EDIT_PLAYER,
    payload: id
  }
}
