import React, { Component } from 'react';
import Image from 'react-bootstrap/es/Image';
import warrior from './warrior.jpg';
import './About.css'

export class About extends Component {

  render() {
    return (
      <div className="about">
        <h1>ABOUT</h1>
        <div className="content">
          <div>
            <Image src={warrior} responsive />
          </div >
          <div className="text-style">
            <p><strong>Mr. Tobus Quickwhistle</strong></p>
            <p>49 Kirkeveien Street</p>
            <p>Brastlewark</p>
            <p>Middle Earth</p>
            <p><a href="mailto:t.quickwhistle@brastlewark.gn">t.quickwhistle@brastlewark.gn</a></p>
            <p>129-3145-887</p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {

};

export default About;