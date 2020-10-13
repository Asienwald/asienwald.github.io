import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// pages
import HomePage from './components/pages/home';
import NotFound from './components/pages/notfound';
import WorldMapPage from './components/pages/worldmap';
import AboutMePage from './components/pages/aboutme';

import PageWrapper from './components/common/pagewrapper';

function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact = {true}
            path = "/"
            component = {HomePage}
          />

          <Route
            exact
            path = "/worldmap"
            component = {WorldMapPage}
          />

          <Route
            exact
            path = "/aboutme"
            component = {AboutMePage}
          />

          <Route
            component = {NotFound}
          />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
