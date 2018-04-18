import React, {Component} from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CatImg from './CatImg';
import {connect} from 'react-redux';
import {get} from '../actions/catsAction';




class App extends Component {

  componentDidMount () {
    this.props.get();
  }

  render() {
    console.log(this.props.cats);
    const activeStyle = { color: '#e73d13', fontWeight: 'bold' };
    return (
      <div>
        <div className = 'navigation'>
          <NavLink  exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage cats = {this.props.cats} {...props}/>}  />
          <Route path="/about" component={AboutPage} />
          <Route path="/:id" component={CatImg} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({cats}) => ({
  cats
});

export default connect(mapStateToProps, {get})(App);
