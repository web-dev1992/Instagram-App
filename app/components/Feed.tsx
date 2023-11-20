import { FC } from "react";
import { Stories } from "./Stories";
import { Posts } from "./Posts";
import { MiniProfile } from "./MiniProfile";
import { Suggestions } from "./Suggestions";
interface IFeedProps {}

export const Feed: FC<IFeedProps> = (props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto ">
      <section className="col-span-2">
        {/* Stories section */}
        <Stories />

        {/* Posts section */}
        <Posts />
      </section>
      <section className="md:col-span-1 hidden md:inline-grid">
        <div className="fixed w-[380px]  ">
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};
