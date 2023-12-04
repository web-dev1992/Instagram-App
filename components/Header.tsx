"use client";

import { FC } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { HomeIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";
interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session on header====>", session);
  const [open, setOpen] = useRecoilState(modalState);
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
            onClick={() => router.push("/")}
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
          <HomeIcon
            onClick={() => router.push("/")}
            className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
          />
          {session ? (
            <>
              {" "}
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              />
              <Image
                onClick={() => signOut()}
                src={session?.user?.image ?? "/images/no-user-image.png"}
                alt="user-image"
                className="h-10 w-10 rounded-full cursor-pointer "
                width={100}
                height={100}
              />
            </>
          ) : (
            <button
              onClick={() => {
                signIn();
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
