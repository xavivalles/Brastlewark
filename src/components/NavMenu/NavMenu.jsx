import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <Navbar className="nav-style" fluid staticTop>
        <Navbar.Collapse>
          <Nav id="basic-nav">
            <NavItem eventKey={1} href="/">
              <span className="nav-font-color">History</span>
            </NavItem>
            <NavItem eventKey={2} href="/population">
              <span className="nav-font-color">Population</span>
            </NavItem>
            <NavItem eventKey={3} href="/about">
              <span className="nav-font-color">About</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavMenu;