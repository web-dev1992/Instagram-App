"use client";
import minifaker from "minifaker";
import { useState, useEffect } from "react";
import "minifaker/locales/en";
import { FC } from "react";
import { Story } from "./Story";

interface IStoriesProps {}
interface userStory {
  id: number;
  img: string;
  username: string;
}
export const Stories: FC<IStoriesProps> = (props) => {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i: number) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 overflow-x-scroll rounded-sm scrollbar-w-0 scrollbar-none">
      {storyUsers.map((user: userStory) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};
