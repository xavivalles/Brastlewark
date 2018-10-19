import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HistoryGnome from './HistoryGnome/HistoryGnome';
import Population from './Population/Population';
import About from './About/About';

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HistoryGnome} />
        <Route exact path="/population" component={Population} />     
        <Route exact path="/about" component={About} />     
      </React.Fragment>
    );
  }
}

export default Router;