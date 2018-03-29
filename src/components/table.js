import React from 'react';
import Player from './player';
import players from '../players.json';

export default () => {
  const playerRow = players.map(player => {
    return <Player
      key={player.id}
      player={player}
    />
  });

  return (
    <div>
      <h1>Player Data</h1>
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
