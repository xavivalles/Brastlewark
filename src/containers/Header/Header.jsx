import React, { Component } from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-organized">
        <div className="header">
          <h1 className="header-title">BRASTLEWARK</h1>
        </div>
        <div className="App-nav">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default Header;