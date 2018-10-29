import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Population from './Population/Population';
import About from './About/About';

class Router extends Component {
  render() {
    const { brastlewark } = this.props;
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => <Population brastlewark={brastlewark} />} /> 
        <Route exact path="/about" component={About} />     
      </React.Fragment>
    );
  }
}

Router.propTypes = {
  brastlewark: PropTypes.array 
};

export default Router;