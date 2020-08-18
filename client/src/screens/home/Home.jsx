import React from 'react';
import PostList from '../../components/postList/PostList'
import Nav from '../../components/shared/nav/Nav'

const Home = () => {
  return (

    <div className='home'>
      <Nav />
        <PostList />
    </div>
      
  )
}

export default Home 