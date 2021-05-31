import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Lectures from './lectures';
import NewLecture from './newLecture';
import Lecture from './lecture';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

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
