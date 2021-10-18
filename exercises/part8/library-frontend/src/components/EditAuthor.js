import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_AUTHOR } from '../queries';

const EditAuthor = ({ authors }) => {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [updateAuthor, result] = useMutation(UPDATE_AUTHOR);

  const submit = async (event) => {
    event.preventDefault();

    updateAuthor({
      variables: { name, setBornTo: birthYear },
    });

    setName('');
    setBirthYear('');
  };

  useEffect(() => {
    // Handle the case of a user trying to edit an author that doesn't exist.
    // (Realisticaly this won't happen b/c the values are limited by the dropdown)
    if (result.data?.editNumber === null) {
      console.error('author not found');
    }
  }, [result.data]);

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <select value={name} onChange={({ target }) => setName(target.value)}>
            {authors.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          born
          <input
            value={birthYear}
            type="number"
            onChange={({ target }) => setBirthYear(parseInt(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default EditAuthor;
