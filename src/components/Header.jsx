import { useNavigate } from "react-router";
import SunIcon from "../assets/Sun-icon.svg";
import MoonIcon from "../assets/Moon-icon.svg";


export default function Header({ toggleDarkmode, dark }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white dark:bg-blue-900 dark:text-white flex justify-between items-center px-4 md:px-10 lg:px-20 py-8 md:py-7.5 lg:py-6 text-grey-950 shadow-1">
      <section>
        <span
          onClick={() => navigate("/")}
          className="text-[14px] font-bold cursor-pointer leading-5 lg:text-2xl lg:leading-[137.5%]"
        >
          Where in the world?
        </span>
      </section>
      <section className="">
        <button
          className="flex gap-2 items-center cursor-pointer"
          onClick={toggleDarkmode}
        >
          <img
            src={dark ? MoonIcon : SunIcon}
            alt="Sun logo"
            className="dark:invert w-3 lg:w-4"
          />
          <span className="capitalize text-[12px] font-semibold leading-[135%] lg:text-[16px] lg:leading-[200%]">
            {!dark ? "dark " : "light "}mode
          </span>
        </button>
      </section>
    </header>
  );
}
