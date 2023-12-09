"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

interface IMiniProfileProps {}

export const MiniProfile: FC<IMiniProfileProps> = (props) => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image
        src={session?.user?.image ?? "/images/no-user-image.png"}
        width={100}
        height={100}
        alt="user-image"
        className="h-14 w-14 rounded-full cursor-pointer border p-[2px]  "
      />
      <div className="flex-1 ml-4 ">
        <h2 className="font-bold ">{session?.user?.username ?? ""}</h2>
        <h3 className="text-sm text-gray-400 ">Welcome to instagram</h3>
      </div>
      <button
        className="font-semibold text-blue-400 text-sm"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};
