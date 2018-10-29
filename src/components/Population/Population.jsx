import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterGrid from '../FilterGrid/FilterGrid';
import './Population.css'

export class Population extends Component {

  render() {
    const { brastlewark } = this.props;
    return (
      <div className="population">
        <div className="text-style">
          <p>The gnomes in this city are not really social because they have a lot of work to do.</p>
          <p>For this reason we have implemented a method to search for them easily.</p>
        </div>
        <div className="grid-style">
          {brastlewark && <FilterGrid brastlewark={brastlewark} />}
        </div>
      </div>
    );
  }
}


Population.propTypes = {
  brastlewark: PropTypes.array
};

export default Population;