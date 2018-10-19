import React, { Component } from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="header-title">BRASTLEWARK</h1>
        </div>
        <div className="App-nav">
          <NavMenu />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;