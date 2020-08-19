import React, { useState, useEffect } from "react";
import Post from "../post/Post.jsx";
import { getPosts } from "../../services/posts";
import {Link} from 'react-router-dom'

import './PostList.css'

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
      <h1>Butt</h1>
      <div className="posts">
        {posts.map((post) => {
          return (
            <>
              <Link to={`/posts/${post._id}`}>
              <Post
                _id={post._id}
                title={post.title}
                imgURL={post.imgURL}
                author={post.author}
              />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
