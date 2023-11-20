import { FC } from "react";
interface IPostProps {
    id:number;
    image:string;
    username:string;
    userimage:string;
    caption:string;
};

export const Post: FC<IPostProps> = ({id, username, image, userimage, caption}) => {
    return (
        <div>
            <h1>{username}</h1>
        </div>
    );
}
