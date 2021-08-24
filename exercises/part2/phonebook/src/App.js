import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import personService from './services/persons';

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
    personService.getAll().then((persons) => setPersons(persons));
  }, []);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handlePersonSubmit = (newPerson) => {
    const existingPerson = persons.find((p) => p.name === newPerson.name);
    if (existingPerson !== undefined) {
      if (
        window.confirm(
          `${newPerson.name} already exists in the phonebook. Would you like to replace their number with the one you have entered?`
        )
      ) {
        const changedPerson = { ...newPerson, number: newPerson.number };

        personService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id === returnedPerson.id ? returnedPerson : person
              )
            )
          );
      }
    } else {
      personService
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
    }
  };

  const handlePersonDelete = ({ id, name }) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const filtered = persons.filter((person) => person.id !== id);
      personService.remove(id).then(() => setPersons(filtered));
    }
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
      <Persons
        persons={personsToShow}
        handleDelete={handlePersonDelete}
      ></Persons>
    </div>
  );
};

export default App;
