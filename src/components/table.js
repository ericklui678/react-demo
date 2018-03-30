import React from 'react';
import { Player } from './player';

export const Table = ({players}) => {
  let playerRow;

  if (players.length) {
    playerRow = players.map(player => {
      return <Player
        key={player.id}
        player={player}
      />
    });
  }

  return (
    <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Region</th>
          </tr>
        </thead>
        <tbody>
          {playerRow}
        </tbody>
      </table>
    </div>
  );
}
