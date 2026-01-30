import { useOutletContext } from "react-router";
import SearchIcon from "../assets/Search-icon.svg";

export default function SearchInput() {
  const { setSearch, search } = useOutletContext();

  return (
    <div>
      <form className="shadow-3 flex-1 dark:bg-blue-900 flex px-8 py-4 gap-6 md:w-[480px] items-center rounded-[5px]">
        <img src={SearchIcon} alt="Search icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
          className="text-[12px] md:text-[14px] w-full font-normal fill-grey-300 leading-[135%] md:leading-[145%] dark:text-white placeholder:text-grey-250 dark:placeholder:text-white"
        />
      </form>
    </div>
  );
}
