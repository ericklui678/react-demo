import React from 'react';

export default ({player}) => {
  const {id, name, regions} = player;

  // regionStr is combined string if player is from multiple regions
  let regionStr;
  regions.length > 1 ? regionStr = regions.join(',') : regionStr = regions[0];


  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{regionStr}</td>
    </tr>
  )
}
