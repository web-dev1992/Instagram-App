"use client";

import { FC, useEffect, useState } from "react";
import { Post } from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
interface IPostsProps {}
interface IPost {
  id: number;
  username: string;
  userimage: string;
  image: string;
  caption: string;
}

export const Posts: FC<IPostsProps> = (props) => {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);
  useEffect(() => {
    //onsnapshot is a firebase function that returns a promise,
    //a builtin firebase function that returns the information from the database
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.data().id}
          username={post.data().username}
          userimage={post.data().profileImg}
          image={post.data().image}
          caption={post.data().caption}
          id={post.data().id}
        />
      ))}
    </div>
  );
};
