import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterGrid from '../FilterGrid/FilterGrid';
import './Population.css'

export class Population extends Component {
  render() {
    const { brastlewark } = this.props;
    return (
      <div className="population">
        <h1 className="bottom-separator">POPULATION</h1>
        <div className="text-styles">
          <p>Because the number of people that are in Brastlewark and to workers who are, we have designed this application to have them every time we start a business.</p>
          <p className="bottom-separator">For this, we have created a table with all of them.</p>
          <p><strong>INSTRUCTIONS:</strong></p>
          <ul className="bottom-separator">
            <li><p>Click on each column to order alphabetically, numerically or in the predefined order.</p></li>
            <li><p>Click filter button to search for any data.</p></li>
            <li><p>If you click on one of them, we can see the information with a better view.</p></li>
          </ul>
        </div>
        <div className="grid-style bottom-separator-table">
          {brastlewark && <FilterGrid brastlewark={brastlewark} />}
        </div>
        <div className="text-styles-bottom  bottom-separator-bottom">
          <p>We hope you find it useful!!!</p>
          <p><strong>NOT SUITABLE FOR ELVES</strong></p>
        </div>
      </div>
    );
  }
}


Population.propTypes = {
  brastlewark: PropTypes.array
};

export default Population;