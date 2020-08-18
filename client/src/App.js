import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/home/Home.jsx';
import Create from './screens/create/Create.jsx';
import Edit from './screens/edit/Edit.jsx';
import PostView from './screens/post/PostView.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create-new-post' component={Create} />
        <Route exact path='/posts/:id' component={PostView} />
        <Route exact path='/posts/:id/edit' component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
