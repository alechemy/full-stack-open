import React from 'react';
import { useQuery } from '@apollo/client';
import Author from './Author';
import { ALL_AUTHORS } from '../queries';
import EditAuthor from './EditAuthor';

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS);

  if (!props.show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        <h2>authors</h2>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>born</th>
              <th>books</th>
            </tr>
            {result.data.allAuthors.map((a) => (
              <Author
                key={a.id}
                name={a.name}
                bookCount={a.bookCount}
                born={a.born}
              ></Author>
            ))}
          </tbody>
        </table>
      </div>
      <EditAuthor authors={result.data.allAuthors}></EditAuthor>
    </>
  );
};

export default Authors;
