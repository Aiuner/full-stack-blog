import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";

function PostView() {
  const [post, updatePost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      updatePost(response);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Layout>
        <img src={post.imgURL} alt="THERE IS NO ALTERNATIVE >:(" />
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <p>{post.content}</p>
      </Layout>
      <Link to={`/posts/${post._id}/edit`}>
        <button>PRESSS MEEEE TO EDITTT</button>
      </Link>
    </>
  );
}

export default PostView;
