import React, { useState, useEffect } from "react";
import Post from "../post/Post.jsx";
import { getPosts } from "../../services/posts";

const PostList = () => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      updatePosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>butt</h1>
      <div className="posts">
        {posts.map((post) => {
          return (
            <>
              <Post
                _id={post._id}
                imgURL={post.imageURL}
                content={post.content}
                author={post.content}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
