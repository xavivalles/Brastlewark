import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HistoryGnome from './HistoryGnome/HistoryGnome';
import Population from './Population/Population';
import About from './About/About';

class Router extends Component {
  render() {
    const { brastlewark } = this.props;
    return (
      <React.Fragment>
        <Route exact path="/" component={HistoryGnome} />
        <Route exact path="/population" render={(props) => <Population brastlewark={brastlewark} />} /> 
        <Route exact path="/about" component={About} />     
      </React.Fragment>
    );
  }
}

Router.propTypes = {
  brastlewark: PropTypes.array 
};

export default Router;