import { useEffect, useState } from "react";

export const useFetchCountriesList = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);

  const fetchDataAPI = () => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => {
        setCountriesList(data);
        setFilteredCountries(data);
        localStorage.setItem("COUNTRIESLIST", JSON.stringify(data));
      })
      .catch(() => setIsErorr(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = localStorage.getItem("COUNTRIESLIST");

    if (data) {
      setCountriesList(JSON.parse(data));
      setFilteredCountries(JSON.parse(data));
    } else {
      fetchDataAPI();
    }
  };

  return {
    countriesList,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  };
};
