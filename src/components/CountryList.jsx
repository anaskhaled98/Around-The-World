import CountryCard from "./CountryCard";
import EmptyState from "./EmptySate";

const CountryList = ({ data }) => {
  return (
    <div className="mt-8 grid gap-x-[32px] gap-y-12 sm:grid-cols-[repeat(2,minmax(0,_auto))] md:mt-12 md:grid-cols-[repeat(3,minmax(0,_auto))] md:justify-between lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default CountryList;
