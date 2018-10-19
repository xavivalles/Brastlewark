import React, { Component } from 'react';
import Image from 'react-bootstrap/es/Image';
import gnome from './gnome-zen.jpg';
import './HistoryGnome.css'

export class HistoryGnome extends Component {

  render() {
    return (
      <div className="historyGnome">
        <div className="left-section">
          <Image src={gnome} responsive />
        </div >
        <div className="right-section">
          Today, the gnomes add a layer of fun to the city and spawn scavenger hunts for children and tourists keen to find them all. It’s important not to forget the reason they’re there, though.
          Sometimes when the system oppressing you seems absurd, that’s the very weapon that is going to be the most effective. Fight fire with satire.
        </div>
      </div>
    );
  }
}

HistoryGnome.propTypes = {

};

export default HistoryGnome;