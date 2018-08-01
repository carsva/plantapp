import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class PlantPop extends Component {
  render() {
    let ThirstyToHappy = event => {
      event.preventDefault();
      // let values = {
      //   name: 'Joey',
      //   amount: 2,
      //   timesPerMonth: 3,
      //   picture: './../plant.jpg',
      //   plantNeedWater: false,

      //   name: this.props.name,
      //   amount: this.props.amount
      //   timesPerMonth
      // }
      // console.log(values)
      // this.props.ThirstyToHappy(this.props.name);
      this.props.blabla(this.props.name);
    };

    return (
      <div className="pop">
        <h2>{this.props.name} needs water</h2>
        <img src="./../plant.jpg" />
        <h2>{this.props.amount} dl water</h2>
        <button onClick={ThirstyToHappy}>Press when you watered</button>
      </div>
    );
  }
}

export default PlantPop;
