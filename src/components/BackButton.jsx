import ArrowBack from "../assets/Arrow-back.svg";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-26 px-6 py-2 shadow-3 capitalize cursor-pointer dark:bg-blue-900 gap-2 flex items-center rounded-xs text-[14px] dark:text-white font-light leading-[225%]"
    >
      <img src={ArrowBack} className="dark:invert h-4" alt="Arrow back icon" />
      back
    </button>
  );
}
