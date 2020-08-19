import React, { useState } from "react";
import { createPost } from "../../services/posts";
import { Redirect } from "react-router-dom";
import Layout from "../../components/shared/layout/Layout";
import "./create.css";

function Create() {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    author: "",
    content: "",
  });

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setIsCreated(created);
  };

  if (isCreated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Layout>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h1>Create new post</h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Image URL"
              name="imgURL"
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Author"
              name="author"
              onChange={handleChange}
              autoComplete="off"
            />
            <textarea
              placeholder="Write post here!"
              name="content"
              cols="30"
              rows="10"
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
            <button type="submit">Submit Posts</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Create;
