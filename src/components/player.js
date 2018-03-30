import React from 'react';
import { Link } from 'react-router-dom';

export const Player = ({ player }) => {
  const {id, name, regions} = player;

  // regionStr is combined string if player is from multiple regions
  let regionStr;
  regions.length > 1 ? regionStr = regions.join(',') : regionStr = regions[0];

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{regionStr}</td>
      <td>
        <Link to={`/edit/${id}`}>Edit</Link>
        {/* <a className='mr-2' href=''>Edit</a> */}
        {/* <Link to={`/edit/${id}`}>Edit</Link> <a href=''>Delete</a> */}
      </td>
    </tr>
  )
}
