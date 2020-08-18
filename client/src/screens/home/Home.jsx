import React from 'react';
import PostList from '../../components/postList/PostList'
import Layout from '../../shared/layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <PostList />
      </div>
    </Layout>
  );
}

export default Home 