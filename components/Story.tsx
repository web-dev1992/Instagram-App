import { FC } from "react";
interface IStoryProps {
  img: string;
  username: string;
}

export const Story: FC<IStoryProps> = ({ img, username }) => {
  return (
    <div>
      <img src={img} alt="userimage" className="h-14 rounded-full border-2 border-red-500 p-[1.5px] curosor-pointer hover:scale-110 transition-transform duration-200 ease-out"/>
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};
