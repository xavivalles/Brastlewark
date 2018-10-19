import React, { Component } from "react";
import { connect } from "react-redux";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import "./App.css";


class App extends Component {
  render() {
    const { fetching, brastlewark, onRonRequestBrastlewarkequestDog, error } = this.props;

    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    brastlewark: state.brastlewark,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestBrastlewark: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);