import React, { Component } from 'react';
import './Footer.css'

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
          <div className="footer-text">
            <p>
              &copy; {(new Date()).getYear() + 1900} Brastlewark City. All rights reserved.
            </p>
          </div>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;