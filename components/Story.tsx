import { FC } from "react";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
interface IStoryProps {
  img: string;
  username: string;
  isUser?: boolean;
}

export const Story: FC<IStoryProps> = ({ img, username, isUser = false }) => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        src={img}
        width={100}
        height={100}
        alt={username}
        className="h-12 w-12 rounded-full border-2 border-red-500 p-[1.5px] group-hover:scale-110 transition-transform duration-200 ease-out"
      />
      {isUser && (
        <PlusCircleIcon className="h-4 w-4 bg-white text-blue-500 rounded-full absolute top-8 left-8" />
      )}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};
