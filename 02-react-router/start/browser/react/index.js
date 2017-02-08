import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

//Components
import Albums from './components/Albums.js';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={AppContainer}>

      <IndexRedirect to="/albums" />

      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);
