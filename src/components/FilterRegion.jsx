import {useOutletContext} from "react-router"
import ArrowDown from "../assets/Arrow-down.svg";
import ArrowUp from "../assets/Arrow-up.svg";

export default function FilterRegion({ toggleFilter, filter }) {
  const { setSearch } = useOutletContext();

  return (
    <div className="w-50 dark:bg-blue-900 rounded-[5px] dark:text-white">
      <button
        onClick={toggleFilter}
        className="flex justify-between items-center px-6 py-4 shadow-3 text-[12px] md:text-[14px] leading-[135%] md:leading-[145%] font-normal rounded-[5px] w-full cursor-pointer"
      >
        Filter by Region
        <img
          src={!filter ? ArrowDown : ArrowUp}
          alt="Arrow down icon"
          className="dark:invert"
        />
      </button>
      <div
        className={`absolute  dark:bg-blue-900 bg-white w-50 px-6 py-4 shadow-3 rounded-[5px] mt-2 ${!filter ? "hidden" : ""}`}
      >
        <ol className="text-[12px] md:text-[14px] leading-[135%] md:leading-[145%] flex flex-col gap-2 *:cursor-pointer">
          <li onClick={(e) => setSearch(e.target.textContent)}>Africa</li>
          <li onClick={(e) => setSearch(e.target.textContent)}>America</li>
          <li onClick={(e) => setSearch(e.target.textContent)}>Asia</li>
          <li onClick={(e) => setSearch(e.target.textContent)}>Europe</li>
          <li onClick={(e) => setSearch(e.target.textContent)}>Oceania</li>
        </ol>
      </div>
    </div>
  );
}
