import Select from "react-select";

const RegionMenu = ({ countriesList, setFilteredCountries }) => {
  const options = [
    { value: "aLl region", label: "All Region" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "occeania", label: "Occeania" },
  ];

  const onChangeSelectHandler = (e) => {
    const region = e.label;
    let filteredCountries = "";
    if (region === "All Region") {
      filteredCountries = countriesList;
    } else {
      filteredCountries = countriesList.filter(
        (country) => country.region === region,
      );
    }
    setFilteredCountries(filteredCountries);
  };

  return (
    <Select
      options={options}
      onChange={onChangeSelectHandler}
      defaultValue={options[0]}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          `flex h-12 items-center justify-between gap-12 rounded-md 
        !border-none pl-4 pr-2 shadow dark:bg-gray-800
         dark:text-gray-100 md:h-14`,
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
};

export default RegionMenu;
