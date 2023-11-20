import { FC } from "react";
import { Stories } from "./Stories";
import { Posts } from "./Posts";
interface IFeedProps {}

export const Feed: FC<IFeedProps> = (props) => {
  return (
    <main>
      <section>
        {/* Stories section */}
        <Stories />

        {/* Posts section */}
        <Posts/>
      </section>
      <section>
        {/* Mini Profile */}

        {/* Suggestions */}
      </section>
    </main>
  );
};
