import React from 'react';

export default ({player}) => {
  const {id, name, regions} = player;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{regions[0]}</td>
    </tr>
  )
}
