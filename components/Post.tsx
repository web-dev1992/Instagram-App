"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import type { FormEvent } from "react";
import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import Moment from "react-moment";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
interface IPostProps {
  id: string;
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
  const [comments, setComments] = useState<any>([]);
  const [likes, setLikes] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", `${id}`, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", `${id}`, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [id]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session?.user?.uid) > -1);
  }, [likes, session?.user?.uid]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(
        doc(db, "posts", `${id}`, "likes", `${session?.user?.uid}`)
      );
    } else {
      await setDoc(
        doc(db, "posts", `${id}`, "likes", `${session?.user?.uid}`),
        {
          username: session?.user?.username,
        }
      );
    }
  }

  async function sendComment(event: FormEvent) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", `${id}`, "comments"), {
      comment: commentToSend,
      username: session?.user?.username,
      userImage: session?.user?.image ?? "/images/no-user-image.png",
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
        className="object-cover w-full aspect-video"
        width={380}
        height={200}
      />
      {/* Post buttons section */}
      {session && (
        <div className="flex justify-between px-4 pt-4 ">
          <div className="flex space-x-4 ">
            {hasLiked ? (
              <FilledHeartIcon
                onClick={likePost}
                className="btn text-red-500 "
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatBubbleOvalLeftIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post Comments section */}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1 "> {likes.length} likes</p>
        )}
        <span className="font-bold mr-2 ">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment: any) => (
            <div
              className="flex items-center space-x-2 mb-2"
              key={comment.data().id}
            >
              <Image
                src={comment.data().userImage}
                alt="user-image"
                width={50}
                height={50}
                className="object-cover w-auto h-7 rounded-full"
              />
              <p className="fone-semibold ">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
      {/* Post input box */}
      {session && (
        <form action="" className="flex items-center p-4">
          <FaceSmileIcon className="h-7 " />
          <input
            type="text"
            name="comment"
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
