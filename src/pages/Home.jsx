import CountryCard from "../components/CountryCard";
import SearchInput from "../components/SearchInput";
import FilterRegion from "../components/FilterRegion";
import { useOutletContext } from "react-router";

export default function Home() {
  const { toggleFilter, filter, filteredCountries } = useOutletContext();

  return (
    <div className="px-4 md:px-10 md:pt-12 pt-6">
      <section>
        <div className="flex flex-col md:flex-row gap-10 md:gap-2">
          <SearchInput />
          <FilterRegion toggleFilter={toggleFilter} filter={filter} />
        </div>
        <article className="px-13.75 py-8 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 md:gap-[72px]">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </article>
      </section>
    </div>
  );
}
