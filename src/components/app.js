import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Lectures from './lectures';
import Counter from './counter';
import Controls from './controls';

const About = (props) => {
  return (
    <div>
      <p>All there is to know about me</p>
      <Counter />
      <Controls />
    </div>
  );
};
// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const App = (props) => {
  const checkTheme = () => {
    return (props.darkTheme ? ('app bp3-dark') : ('app'));
  };

  return (
    <Router>
      <div className={checkTheme()}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Lectures} />
          <Route exact path="/lectures/new" component={About} />
          <Route path="/lectures/:id" component={Test} />
          <Route render={() => (<FallBack />)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
