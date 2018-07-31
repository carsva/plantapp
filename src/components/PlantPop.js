import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class PlantPop extends Component {
  render() {

    return (
      <div className="pop">
        <h2>{this.props.name} needs water</h2>
        <img src="./../plant.jpg" />
        <h2>{this.props.amount} dl water</h2>
        <button>Press when you watered</button>
      </div>
    );
  }
}

export default PlantPop;
