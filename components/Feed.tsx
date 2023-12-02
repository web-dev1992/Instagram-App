"use client";

import { FC } from "react";
import { Stories } from "./Stories";
import { Posts } from "./Posts";
import { MiniProfile } from "./MiniProfile";
import { Suggestions } from "./Suggestions";
import { useSession } from "next-auth/react";
interface IFeedProps {}

export const Feed: FC<IFeedProps> = (props) => {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 ${
        session
          ? " md:grid-cols-3 md:max-w-6xl mx-auto"
          : " md:grid-cols-2 md:max-w-3xl mx-auto"
      }`}
    >
      <section className="col-span-2">
        {/* Stories section */}
        <Stories />

        {/* Posts section */}
        <Posts />
      </section>
      <section className="md:col-span-1 hidden md:inline-grid">
        <div className="fixed w-[380px]  ">
          {/* Mini Profile */}
          {session && <MiniProfile />}

          {/* Suggestions */}
          {/* <Suggestions /> */}
        </div>
      </section>
    </main>
  );
};
