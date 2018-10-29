import React, { Component } from 'react';
import { connect } from "react-redux";
import Router from '../../components/Router';
import './Main.css';

class Main extends Component {
  componentDidMount = () => {
    const { onRequestBrastlewark, brastlewark } = this.props;
    if (brastlewark === null) {
      onRequestBrastlewark();
    }
  }

  render() {
    const { brastlewark } = this.props;
    return (
      <div className="main">
        <Router brastlewark={brastlewark} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);