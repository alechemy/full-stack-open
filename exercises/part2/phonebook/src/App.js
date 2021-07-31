import React, { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [nameFilter, setNameFilter] = useState('');
  const personsToShow =
    nameFilter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(nameFilter.toLowerCase())
        );

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handlePersonSubmit = (newPerson) => {
    if (persons.findIndex((person) => person.name === newPerson.name) > -1) {
      alert(`${newPerson.name} is already added to the phonebook!`);
      return;
    }

    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:
      <Filter
        filter={nameFilter}
        handleFilterChange={handleNameFilterChange}
      ></Filter>
      <h2>Add a New Contact</h2>
      <PersonForm handleSubmit={handlePersonSubmit}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}></Persons>
    </div>
  );
};

export default App;
