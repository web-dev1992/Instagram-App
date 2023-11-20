import { FC } from "react";
import { Post } from "./Post";
interface IPostsProps {}

export const Posts: FC<IPostsProps> = (props) => {
  const posts = [
    {
      id: 1,
      username: "taraneh",
      userimage: "/images/taraneh.jpg",
      image: "/images/taraneh_cap.jpg",
      caption: "Nice Picture",
    },
    {
      id: 2,
      username: "Alireza",
      userimage: "/images/alireza.jpg",
      image: "/images/alireza_cap.jpg",
      caption: "Nice Picture",
    },
    {
      id: 3,
      username: "Iris",
      userimage: "/images/iris.jpg",
      image: "/images/iris_cap.jpg",
      caption: "Nice Picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userimage={post.userimage}
          image={post.image}
          caption={post.caption}
          id={post.id}
        />
      ))}
    </div>
  );
};
