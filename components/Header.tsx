import { FC } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <div className="bg-white sticky border-b shadow-sm z-30 top-0">
      <div className="flex content-center items-center justify-between max-w-6xl mx-4 xl:m-auto ">
        {/* left part */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid content-center">
          <Image
            src="/images/Instagram_logo.png"
            width={100}
            height={200}
            alt="Instagram Logo"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative  lg:hidden flex items-center contect-center">
          <Image
            src="/images/instagram.jpeg"
            width={100}
            height={200}
            alt="Instagram Logo"
            className="object-contain"
          />
        </div>
        {/* middle part */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search "
            className="bg-gray-50 pl-10  border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "
          />
        </div>
        {/* right part */}
        <div className="flex space-x-4 items-center ">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="/images/taraneh.jpg"
            alt="user-image"
            className="h-10 rounded-full cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};
