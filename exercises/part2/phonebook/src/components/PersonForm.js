import React, { useState } from 'react';

const PersonForm = ({ handleSubmit }) => {
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });

  const handleNameChange = (event) => {
    const name = event.target.value;
    setNewPerson({ ...newPerson, name });
  };

  const handleNumberChange = (event) => {
    const number = event.target.value;
    setNewPerson({ ...newPerson, number });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setNewPerson({ name: '', number: '' });
    handleSubmit(newPerson);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name:
        <input type="text" value={newPerson.name} onChange={handleNameChange} />
        <br />
        number:
        <input
          type="text"
          value={newPerson.number}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
