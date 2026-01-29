import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getCountryByName } from "../services/countriesApi";
import BackButton from "../components/BackButton";

export default function Country() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCountryByName(name).then((data) => {
      setCountry(data[0]);
    });
  }, [name]);

  useEffect(() => {
    const fetchBorders = async () => {
      if (!country || !country.borders || country.borders.length === 0) {
        setBorders([]);
        return;
      }

      try {
        const codigos = country.borders.join(",");
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codigos}`,
        );
        const paises = await response.json();

        setBorders(paises.map((p) => p.name.common));
      } catch (error) {
        console.error("Error al obtener países limítrofes:", error);
        setBorders([]);
      }
    };

    fetchBorders();
  }, [country]);

  if (!country) return <p className="p-4">Loading...</p>;
  return (
    <section className="dark:bg-blue-950 pt-10 pb-[55px] lg:h-screen flex flex-col gap-16 lg:gap-20 sm:gap-14 px-7 sm:px-[100px] lg:px-20">
      <BackButton onClick={() => navigate(-1)} />
      <article className="dark:text-white lg:flex lg:flex-row lg:gap-[120px]">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="mb-4 lg:mb-0 rounded-[5px] sm:mb-14 lg:w-[560px] 2xl:w-[750px]"
        />
        <section className="flex flex-col items-start gap-8 lg:w-[600px]">
          <h2 className="text-[24px] sm:text-[32px] font-extrabold leading-[137.5%] mb-4">
            {country.name.common}
          </h2>
          <div className="md:flex md:justify-between flex flex-col md:flex-row gap-8 lg:w-full">
            <ul className="*:capitalize **:text-[14px] sm:**:text-[16px] **:leading-8">
              <li>
                <strong className="font-semibold">native name:</strong>{" "}
                {country.altSpellings[1]}
              </li>
              <li>
                <strong className="font-semibold">population:</strong>{" "}
                {country.population.toLocaleString("en-US")}
              </li>
              <li>
                <strong className="font-semibold">Region:</strong>{" "}
                {country.region}
              </li>
              <li>
                <strong className="font-semibold">sub region:</strong>{" "}
                {country.subregion}
              </li>
              <li>
                <strong className="font-semibold">capital:</strong>{" "}
                {country.capital}
              </li>
            </ul>
            <ul className="**:text-[14px] *:capitalize **:leading-8 sm:**:text-[16px]">
              <li className="normal-case!">
                <strong className="font-semibold capitalize">
                  top level domain:
                </strong>{" "}
                {country.tld[0]}
              </li>
              <li>
                <strong className="font-semibold">currencies:</strong>{" "}
                {Object.values(country.currencies).map((curr, i) => (
                  <span key={i}>
                    {curr.name}
                    {i < Object.values(country.currencies).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </li>
              <li>
                <strong className="font-semibold">languages:</strong>{" "}
                {Object.values(country.languages).map((lang, i) => (
                  <span key={i}>
                    {lang}
                    {i < Object.values(country.languages).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:items-start md:gap-4">
            <div className=" whitespace-nowrap">
              <h3 className="capitalize text-[16px] font-semibold sm:mb-0 mb-4 leading-[158%]">
                border countries
              </h3>
            </div>
            <div>
              {borders.length > 0 ? (
                <ul className="flex flex-wrap gap-4">
                  {borders.map((pais, i) => (
                    <li
                      onClick={() => navigate(`/country/${pais}`)}
                      className="text-[12px] lg:text-[14px] rounded-xs dark:bg-blue-900 cursor-pointer px-6 py-1.5 font-light leading-[135%] shadow-4"
                      key={i}
                    >
                      {pais}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Doesn't have.</p>
              )}
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
