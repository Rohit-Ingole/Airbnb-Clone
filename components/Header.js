import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Header = ({ placeholder }) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const Submit = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };
  const Cancel = () => {
    setSearchInput("");
  };

  const Button = ({ text, color, submit }) => (
    <button
      className={`text-md font-semibold flex-grow font-mono border-2 rounded-lg py-2 hover:shadow-md shadow-sm ${
        color && "text-red-400"
      }`}
      onClick={submit ? Submit : Cancel}
    >
      {text}
    </button>
  );

  const selectionRange = {
    startDate,
    endDate,
    key: "Selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  return (
    <header className="sticky top-0 x-50 items-center md:grid md:grid-cols-3 flex bg-white shadow-md p-3 md:px-10 z-50">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto animate-bounce"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          objectFit="contain"
          objectPosition="left"
          width={100}
          height={80}
        />
      </div>
      <div className="flex flex-grow ml-4 items-center border-2 rounded-full py-2 md:shadow-sm focus-within:shadow-md">
        <input
          value={searchInput}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="pl-5 bg-transparent outline-none flex-grow text-md text-gray-600 placeholder-gray-400 text-xs sm:text-sm lg:text-md xl:text-lg"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <SearchIcon className="h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer hidden lg:inline-flex md:mx-2" />
      </div>
      <div className="space-x-4 items-center justify-end text-gray-500 hidden md:flex">
        <p className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-full hidden lg:inline">
          Become a host
        </p>
        <GlobeAltIcon className="h-10 cursor-pointer hover:bg-gray-100 p-2 rounded-full hidden md:inline" />
        <div className="items-center border-2 space-x-2 rounded-full p-2 cursor-pointer hover:shadow-md hidden md:flex">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="md:flex flex-col col-span-3 mx-auto mt-3 hidden ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 ml-5">
            <h2 className="text-2xl font-mono font-semibold text-gray-600 flex-grow">
              Number of Guests
            </h2>
            <UserGroupIcon className="h-5 mr-4 text-gray-600" />
            <input
              type="number"
              className="w-20 pl-2 text-lg outline-none border-2 text-red-400 px-2 rounded-md"
              min={1}
              value={noOfGuests}
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
            />
          </div>
          <div className="flex space-x-1 ml-5">
            <Button text="Cancel" />
            <Button text="Submit" color submit />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
