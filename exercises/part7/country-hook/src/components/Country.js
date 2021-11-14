const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.data) {
    return <div>not found...</div>;
  }

  const { name, capital, population, flag } = country.data;

  return (
    <div>
      <h3>{name}</h3>
      <div>Capital: {capital} </div>
      <div>Population: {population}</div>
      <br />
      <img src={flag} height="100" alt={`flag of ${name}`} />
    </div>
  );
};

export default Country;
