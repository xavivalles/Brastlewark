import React, { Component } from 'react';
import './Population.css'

export class Population extends Component {

  render() {
    return (
      <div className="population">
        <div className="text-style">
          <p>The gnomes in this city are not really social because they have a lot of work to do.</p>
          <p>For this reason we have implemented a method to search for them easily.</p>
        </div>
      </div>
    );
  }
}

Population.propTypes = {

};

export default Population;