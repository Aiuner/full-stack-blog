import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/layout/Layout";
import { getPost, editPost } from "../../services/posts";
import "./edit.css";

const Edit = (props) => {
  const [post, updatePost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isEdited, updateEdited] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await getPost(id);
      updatePost(post);
    };
    fetchPosts();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    updatePost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const edited = await editPost(id, post);
    updateEdited(edited);
  };

  if (isEdited) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img className="edit-post-image" src={post.imgURL} alt={post.name} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={post.title}
            name="title"
            required
            onChange={handleChange}
          ></input>
          <input
            className="edit-input-image-link"
            placeholder="Put Your Pic heere"
            value={post.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </form>

        <form className="edit-form" onSubmit={handleSubmit}>
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <input
            className="input-author"
            placeholder="author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
