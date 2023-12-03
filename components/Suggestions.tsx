"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import minifaker from "minifaker";
import "minifaker/locales/en";
interface ISuggestionsProps {}
interface suggestion {
  id: number;
  username: string;
  jobTitle: string;
  image: string;
}
export const Suggestions: FC<ISuggestionsProps> = (props) => {
  const [suggestions, setSuggestions] = useState<suggestion[]>([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i: number) => ({
      id: i,
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10 ">
      <div className="flex  justify-between mb-5 text-sm ">
        <h3 className="font-bold text-gray-400">suggestions for you</h3>
        <button className="text-gray-600 font-semibold ">See All</button>
      </div>
      {suggestions.map((suggestion: suggestion) => (
        <div
          className="flex items-center justify-between mt-3 "
          key={suggestion.id}
        >
          <Image
            src={suggestion.image}
            alt={suggestion.username}
            width={100}
            height={100}
            className="h-12 w-12 rounded-full border p-[2px] "
          />

          <div className="flex-1 ml-4  ">
            <h2 className="font-semibold text-sm ">{suggestion.username}</h2>
            <h3 className="text-gray-400 text-sm truncate w-[230px]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};
