import { FC } from "react";
import { Stories } from "./Stories";
interface IFeedProps {}

export const Feed: FC<IFeedProps> = (props) => {
  return (
    <main>
      <section>
        {/* Stories section */}
        <Stories />

        {/* Posts section */}
      </section>
      <section>
        {/* Mini Profile */}

        {/* Suggestions */}
      </section>
    </main>
  );
};
