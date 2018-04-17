import React, {Component} from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
// import HomePage from './HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage';
// import AboutPage from './AboutPage';
// import NotFoundPage from './NotFoundPage';


class App extends Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
