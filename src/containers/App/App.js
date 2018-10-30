import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    const { onRequestBrastlewark, brastlewark } = this.props;
    if (brastlewark === null) {
      onRequestBrastlewark();
    }
  }

  render() {
    const { brastlewark } = this.props;
    return (
      <div className="App">
        <Header />
        <Main brastlewark = {brastlewark}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    brastlewark: state.brastlewark
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestBrastlewark: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));