import { FC } from "react";
import Image from "next/image";
interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <div>
      {/* left part */}
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="/images/Instagram_logo.png"
            width={100}
            height={200}
            alt="Instagram Logo"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
          <Image
            src="/images/instagram.jpeg"
            width={100}
            height={200}
            alt="Instagram Logo"
            className="object-contain"
          />
        </div>
        <h1>right side</h1>
      </div>
      {/* middle part */}
      {/* right part */}
    </div>
  );
};
