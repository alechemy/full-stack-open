import React from 'react';

const Author = ({ name, bookCount, born }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{born}</td>
      <td>{bookCount}</td>
    </tr>
  );
};

export default Author;
