//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';
import SavePost from './components/SavePost';
import { Route } from 'react-router-dom';

function App() {
  

  return (
    <div>
      <Route path="/" component={Main} exact/>
      <Route path="/home" component={Home} />
      <Route path="/post/save" component={SavePost} />
      {/* <div className="App">
        <div>메시지는 : {message}</div>
        <Header></Header>
        <Main></Main>
      </div> */}
    </div>
  );
}

export default App;
