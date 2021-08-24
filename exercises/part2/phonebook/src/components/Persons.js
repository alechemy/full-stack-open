const Persons = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
