import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 x-50 flex items-center md:grid md:grid-cols-3 bg-white shadow-md p-3 md:px-10 place-content-between z-50">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          objectFit="contain"
          objectPosition="left"
          width={100}
          height={80}
        />
      </div>
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm focus-within:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-md text-gray-600 placeholder-gray-400"
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
    </header>
  );
};

export default Header;
