import { Link } from "react-router";

export default function CountryCard({ country }) {
  return (
    <Link className="md:w-[264px]" to={`/country/${country.name.common}`}>
      <article className="shadow-2 rounded-[5px] overflow-hidden text-grey-950 dark:text-white dark:bg-blue-900">
        <img src={country.flags.svg} alt={country.flags.alt} />
        <div className="px-6 pt-5.5 pb-12">
          <h2 className="mb-4 text-[18px] font-extrabold leading-[145%]">
            {country.name.common}
          </h2>
          <ul>
            <li className="font-light">
              <strong className="font-semibold"> Population:</strong>{" "}
              {country.population.toLocaleString("en-US")}
            </li>
            <li>
              <strong className="font-semibold">Region:</strong>{" "}
              {country.region}
            </li>
            <li>
              <strong className="font-semibold">Capital:</strong>{" "}
              {country.capital[0]}
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}
