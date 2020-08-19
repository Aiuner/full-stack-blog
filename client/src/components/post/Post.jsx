import React from "react";
import { Link } from "react-router-dom";

import "./post.css";

const Post = (props) => {
  return (
    <div
      className="post-card"
      style={{
        backgroundImage: `url(${props.imgURL})`,
        backgroundSize: "cover",
      }}
    >
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </div>
  );
};

export default Post;
