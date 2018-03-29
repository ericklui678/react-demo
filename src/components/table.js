import React from 'react';
import Player from './player';
import players from '../players.json';

export default () => {
  console.log(players);
  let first = players.slice(0, 5);
  const playerRow = first.map(player => {
    return <Player
      key={player.id}
      player={player}
    />
  });

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
