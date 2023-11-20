import { FC } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
interface IPostProps {
    id:number;
    image:string;
    username:string;
    userimage:string;
    caption:string;
};

export const Post: FC<IPostProps> = ({id, username, image, userimage, caption}) => {
    return (
        <div className="bg-white my-7 border rounded-md">
           {/* Post Header section */}
           <div className="flex items-center p-5"> 
            <img src={userimage} alt={userimage} className="h-12 w-12 rounded-full object-cover border p-1 mr-3" />
            <p className="font-bold flex-1">{username}</p>
            <EllipsisHorizontalIcon className="h-5"/>
           </div>
           {/* Post image section */}
           <img src={image} alt={image} className="object-cover w-full" />
        </div>
    );
}
