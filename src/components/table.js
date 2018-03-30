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
            <th colSpan='4'>
              <button type='button' className='btn btn-primary mr-3'>+</button>
              Add a player
            </th>
          </tr>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Region</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {playerRow}
        </tbody>
      </table>
    </div>
  );
}
