import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const personsToShow =
    nameFilter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(nameFilter.toLowerCase())
        );

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({ data }) => setPersons(data));
  }, []);

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
