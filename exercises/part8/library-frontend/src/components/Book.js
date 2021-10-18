import React from 'react';

const Book = ({ title, author, published }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{published}</td>
    </tr>
  );
};

export default Book;
