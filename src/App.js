//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';
import SaveAddressPage from './components/SaveAddressPage';
import SavePost from './components/SavePost';
import { Route } from 'react-router-dom';
import UploadPicturePage from './components/UploadPicturePage';
import PostWritePage from './components/PostWritePage';

import SimpleReview from './components/SimpleReview';

// slide panel
import SlidePanel from './components/SlidePanel';

function App() {
  

  return (
    <div>
      <Route path="/" component={Main} exact/>
      <Route path="/home" component={Home} />
      <Route path="/post/save" component={SavePost} />
      <Route path="/picture" component={UploadPicturePage} />
      <Route path="/map" component={SaveAddressPage} />
      <Route path="/post/write" component={PostWritePage} />
      <Route path="/slidepanel" component={SlidePanel}/>
      <Route path="/simple-review" component={SimpleReview} />
    </div>
  );
}

export default App;
