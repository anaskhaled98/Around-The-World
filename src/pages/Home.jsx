import ShowMessage from "../components/ShowMessage";
import SearchBar from "../components/SearchBar";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import { useFetchCountriesList } from "../useFetchCountriesList.js";

const Home = () => {
  const {
    countriesList,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  } = useFetchCountriesList();

  return (
    <>
      {isLoading && <ShowMessage>Loading Data ...</ShowMessage>}
      {isError && <ShowMessage>Somthing went wrong!</ShowMessage>}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col items-start justify-between gap-6 md:h-14 md:flex-row md:gap-0">
            <SearchBar
              countriesList={countriesList}
              setFilteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={countriesList}
              setFilteredCountries={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
