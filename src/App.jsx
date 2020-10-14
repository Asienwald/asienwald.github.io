import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// pages
import HomePage from './components/pages/home';
import NotFound from './components/pages/notfound';
import WorldMapPage from './components/pages/worldmap';
import AboutMePage from './components/pages/aboutme';
import EducationPage from './components/pages/education'
import ExperiencePage from './components/pages/experience';


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
            exact
            path = "/education"
            component = {EducationPage}
          />

          <Route
            exact
            path = "/experience"
            component = {ExperiencePage}
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
