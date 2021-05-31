import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Lectures from './lectures';
import NewLecture from './newLecture';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Lectures} />
          <Route exact path="/lectures/new" component={NewLecture} />
          <Route path="/lectures/:id" component={Test} />
          <Route render={() => (<FallBack />)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
