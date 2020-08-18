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
        {Post}
      </div>
      </>
  )
}

export default PostList 