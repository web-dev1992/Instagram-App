import { FC } from "react";
interface IMiniProfileProps {}

export const MiniProfile: FC<IMiniProfileProps> = (props) => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="/images/taraneh.jpg"
        alt="user-image"
        className="h-16 rounded-full cursor-pointer border p-[2px]  "
      />
      <div className="flex-1 ml-4 ">
        <h2 className="font-bold ">WebDevelopper</h2>
        <h3 className="text-sm text-gray-400 ">Welcomt to instagram</h3>
      </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
};
