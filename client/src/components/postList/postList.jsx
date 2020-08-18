import React, { useState,useEffect  } from 'react';
import Post from '../post/Post.jsx'

const PostList = () => {
  const [posts, updatePosts] = useState([])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts()
  //     updatePosts(response.data)
  //   }
  //   fetchPosts();
  // }, [])


  return ( 
    <>
      <h1>butt</h1>
      <div className='posts'>
        {posts.map((post) => {
          <>
            <Post _id={post._id} imgURL={post.imageURL} content = {post.content} author={post.content} />
        </>
        })}
      </div>
      </>
  )
}

export default PostList 