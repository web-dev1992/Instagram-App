
import { FC, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import type { FormEvent } from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "@/firebase";
interface IPostProps {
  id: number;
  image: string;
  username: string;
  userimage: string;
  caption: string;
}

export const Post: FC<IPostProps> = ({
  id,
  username,
  image,
  userimage,
  caption,
}) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");

  
  async function sendComment(event: FormEvent) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", "_id", "comments"), {
      comment: commentToSend,
      username: session?.user?.username,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  }
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header section */}
      <div className="flex items-center p-5">
        <Image
          src={userimage}
          alt={userimage}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* Post image section */}
      <Image
        src={image}
        alt={image}
        className="object-cover w-full"
        fill={true}
      />
      {/* Post buttons section */}
      {session && (
        <div className="flex justify-between px-4 pt-4 ">
          <div className="flex space-x-4 ">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post Comments section */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2 ">{username}</span>
        {caption}
      </p>
      {/* Post input box */}
      {session && (
        <form action="" className="flex items-center p-4">
          <FaceSmileIcon className="h-7 " />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter Your Comment..."
            className="border-none flex-1 focus:ring-0"
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            onClick={sendComment}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};
