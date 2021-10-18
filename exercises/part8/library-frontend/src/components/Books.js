import React from 'react';
import { useQuery } from '@apollo/client';
import Book from './Book';
import { ALL_BOOKS } from '../queries';

const Books = (props) => {
  const result = useQuery(ALL_BOOKS);

  if (!props.show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {result.data.allBooks.map((b) => (
            <Book
              key={b.id}
              title={b.title}
              author={b.author}
              published={b.published}
            ></Book>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
