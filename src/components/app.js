/**
 * app.js - top-level file for the React webapp
 * Contains the router and fallback component
 *
 * Spring 2021
 */
import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Lectures from './lectures';
import NewLecture from './newLecture';
import Lecture from './lecture';

// Fallback component for incorrect URLs
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// Set up routing in app
const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Lectures} />
          <Route exact path="/lectures/new" component={NewLecture} />
          <Route path="/lectures/:id" component={Lecture} />
          <Route render={() => (<FallBack />)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
