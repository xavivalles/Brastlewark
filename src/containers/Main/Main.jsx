import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from '../../components/Router';
import './Main.css';

class Main extends Component {
  render() {
    const { brastlewark } = this.props;
    return (
      <div className="main">
        <Router brastlewark={brastlewark} />
      </div>
    );
  }
}

Main.propTypes = {
  brastlewark: PropTypes.array
};

export default Main;