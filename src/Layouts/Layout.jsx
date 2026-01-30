import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCountries } from "../services/countriesApi";
import Header from "../components/Header";

export default function Layout() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(!true);
  const [dark, setDark] = useState(!true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries()
      .then(setCountries)
      .finally(() => setLoading(false));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const value = search.toLowerCase();

    return (
      country.name.common.toLowerCase().includes(value) ||
      country.region.toLowerCase().includes(value)
    );
  });

  if (!country)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <img
          className="animate-spin w-3xs h-3xs opacity-30 dark:invert"
          src={LoadingIcon}
        />
      </div>
    );

  const toggleFilter = () => setFilter((prev) => !prev);
  const toggleDarkmode = () => setDark((prev) => !prev);

  return (
    <div className={`dark:bg-blue-950 ${dark ? "dark" : ""}`}>
      <Header dark={dark} toggleDarkmode={toggleDarkmode} />
      <main>
        <Outlet
          context={{
            dark,
            toggleFilter,
            filter,
            countries,
            search,
            setSearch,
            filteredCountries,
          }}
        />
      </main>
    </div>
  );
}
