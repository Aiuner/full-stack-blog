import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postList/PostList'
import { Route } from 'react-router-dom'
import Home from './screens/home/Home'


function App() {
  return (
    <div>
    <Route path='/'>
        <Home />  
      </Route>
      
    </div>
  );
}

export default App;
