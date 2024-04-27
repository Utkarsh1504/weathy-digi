/* eslint-disable react/prop-types */

import { formatDate } from "../utils/date";

function Temperature({ setCity, stats, fetchData }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const date = formatDate(stats.time);
  return (
    <>
      <div className="flex align-middle justify-center gap-2">
        <input
          type="text"
          className="bg-zinc-700 border rounded-lg border-none text-zinc-200 placeholder-zinc-400 text-md block w-50 p-2 focus:ring-4 focus:ring-zinc-400  focus:outline-none"
          placeholder="Enter Your City Name"
          onChange={handleCityChange}
          defaultValue="Lucknow"
        />

        <button
          onClick={() => fetchData()}
          className="bg-blue-600 hover:bg-blue-700 text-zinc-200 font-bold py-1 px-4 rounded"
        >
          Search
        </button>
      </div>

      <div className="flex justify-center">
        {stats.isDay !== 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-yellow-300 mt-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-slate-200 mt-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </div>

      <div className="flex justify-center items-center text-slate-200 mt-8">
        <p className="font-semibold text-[55px] ">
          {stats.temp}
          <span className="text-[33px]">°C</span>
        </p>
      </div>

      <div className="flex justify-center text-slate-300 mt-8 text-[25px] ">
        {stats.condition}
      </div>

      <div className="flex justify-center text-slate-400 mt-5 text-[15px]">
        Today &#183; {date} | {stats.location}
      </div>
    </>
  );
}

export default Temperature;
