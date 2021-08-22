import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${country.name}`
      )
      .then(({ data }) => setWeather(data));
  }, [country.name]);

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Spoken Languages</h2>
      <ul>
        {country.languages?.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img alt="Country Flag" src={country.flag} width="300px" />
      {!!weather && (
        <>
          <h2>
            Current Weather in {weather.location.name},{' '}
            {weather.location.country}
          </h2>
          <p>
            Temperature: {weather.current.temperature}℃ (feels like{' '}
            {weather.current.feelslike}℃)
          </p>
          <img
            alt="Weather icon"
            src={weather.current.weather_icons[0]}
            width="100px"
          />
          <p>
            Wind: {weather.current.wind_speed}mph, blowing{' '}
            {weather.current.wind_dir}
          </p>
        </>
      )}
    </>
  );
};

export default CountryDetails;
