import React, { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";

function PostView() {
  const [post, updatePost] = useState({})
  const [isDeleted, updateIsdDelete] = useState(false)
  

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      updatePost(response);
    };
    fetchPost();
  }, []);

  const handleDeletePost = async (e) => {
    e.preventDefault()
    const deleted = await deletePost(post.id)
    updateIsdDelete({ deleted })
  }

  if (isDeleted) return <Redirect to={`/`} />
  

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
      <button onClick={handleDeletePost}>DELETE MEEEEE</button>
    </>
  );
}

export default PostView;
