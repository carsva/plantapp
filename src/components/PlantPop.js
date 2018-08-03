import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class PlantPop extends Component {
  render() {
    let ThirstyToHappy = event => {
      event.preventDefault();
      this.props.blabla(this.props.name);
    };

    return (
      <div className="pop">
        <h2>{this.props.name} needs water</h2>
        <img src="./../plant.jpg" />
        <h3>{this.props.amount} dl water</h3>
        <button className="button-style" onClick={ThirstyToHappy}>Press when you watered</button>
      </div>
    );
  }
}

export default PlantPop;
