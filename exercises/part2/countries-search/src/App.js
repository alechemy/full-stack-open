import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryDetails from './components/CountryDetails';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({ data }) => setCountries(data));
  }, []);

  useEffect(() => {
    const countriesToShow =
      filter.length === 0 || countries.length === 0
        ? []
        : countries.filter((country) =>
            country.name.toLowerCase().includes(filter.toLowerCase())
          );
    if (countriesToShow.length === 1) {
      setSelectedCountry(countriesToShow[0]);
    } else {
      setSelectedCountry(undefined);
    }
    setCountriesToShow(countriesToShow);
  }, [filter, countries]);

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const handleShowButtonClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      find countries <> </>
      <input
        type="text"
        name="search"
        autoComplete="none"
        value={filter}
        onChange={handleSearchChange}
      ></input>
      {countriesToShow.length > 0 &&
        (countriesToShow.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <ul>
            {countriesToShow.map((country) => (
              <li key={country.name}>
                {country.name}
                <button onClick={() => handleShowButtonClick(country)}>
                  show
                </button>
              </li>
            ))}
          </ul>
        ))}
      {!!selectedCountry && (
        <CountryDetails country={selectedCountry}></CountryDetails>
      )}
    </div>
  );
};

export default App;
