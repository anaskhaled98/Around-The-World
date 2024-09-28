import { useEffect, useState } from "react";

export const useFetchCountry = (country) => {
  const [countryInfo, setcountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((data) => data.json())
      .then((data) => {
        setcountryInfo(data[0]);
      })
      .catch(() => setIsErorr(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    countryInfo,
    isLoading,
    isError,
  };
};
