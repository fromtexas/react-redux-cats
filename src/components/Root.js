import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import {get} from '../actions/catsAction';
import {getCategories} from '../actions/categoriesActions';

export default class Root extends Component {

  componentDidMount () {
    this.props.store.dispatch(get());
  }

  render () {
    const { store, history } = this.props; 
    return (
      <Provider store = {store}>
        <ConnectedRouter history = {history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

