const SearchBar = ({ countriesList, setFilteredCountries }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    const filteredCountries =
      !searchValue && searchValue.trim() === ""
        ? countriesList
        : countriesList.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()),
          );
    setFilteredCountries(filteredCountries);
  };

  return (
    <form className="relative flex-1 self-stretch" onSubmit={onSubmitHandler}>
      <div className="absolute left-8 top-1/2 translate-y-[-50%]">
        <svg
          className="fill-[#374151] dark:fill-custom-gray"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search for a country…"
        className="h-12 w-full max-w-md rounded-full pl-20 shadow dark:bg-gray-800 md:h-14"
      />
    </form>
  );
};

export default SearchBar;
