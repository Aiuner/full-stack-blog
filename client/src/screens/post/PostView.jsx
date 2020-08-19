import React, { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";
import "./postView.css";

function PostView() {
  const [post, updatePost] = useState({});
  const [isDeleted, updateIsdDelete] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      updatePost(response);
    };
    fetchPost();
  }, []);

  const handleDeletePost = async (e) => {
    e.preventDefault();
    const deleted = await deletePost(post._id);
    updateIsdDelete({ deleted });
  };

  if (isDeleted) return <Redirect to={`/`} />;

  return (
    <>
      <Layout>
        <div className="center">
          <img
            className="post-img"
            src={post.imgURL}
            alt="THERE IS NO ALTERNATIVE >:("
          />

          <h1>{post.title}</h1>
          <p className="titleTags">{post.author}</p>
          <p className="pTags">{post.content}</p>
          <div className="btn-div">
            <button className="btn-PV">
              <Link to={`/posts/${post._id}/edit`}>Edit</Link>
            </button>

            <button className="btn-PV" onClick={handleDeletePost}>
              Delete
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PostView;
