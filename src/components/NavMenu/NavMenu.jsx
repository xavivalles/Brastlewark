import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <Navbar className="nav-style" fluid staticTop>
        <Nav id="basic-nav">
          <NavItem eventKey={2} href="/">
            <span className="nav-font-color">Population</span>
          </NavItem>
          <NavItem eventKey={3} href="/about">
            <span className="nav-font-color">About</span>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavMenu;