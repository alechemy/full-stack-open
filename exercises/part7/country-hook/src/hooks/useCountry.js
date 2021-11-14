import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!name) {
      return;
    }

    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(({ data }) => {
        const [{ name, capital, population, flags }] = data;

        setCountry({
          data: {
            name: name.common,
            capital: capital[0],
            population,
            flag: flags.png,
          },
        });
      })
      .catch((err) => setCountry({}));
  }, [name]);

  return country;
};
