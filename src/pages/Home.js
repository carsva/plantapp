import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';
import PlantPop from './../components/PlantPop';

class Home extends Component {


  renderClass(context) {
    if (!context.plants[0]) {
      return 'background-neutral';
    } else if (context.anyPlantNeedWater === true) {
      return 'background-notwatered';
    } else if (context.anyPlantNeedWater === false) {
      return 'background-watered';
    }
  }

  renderTitle(context) {
    if (!context.plants[0]) {
      return <h1>You have no plants</h1>;
    } else if (context.anyPlantNeedWater === true) {
      return <h1>Your plants are not feeling well</h1>;
    } else if (context.anyPlantNeedWater === false) {
      return <h1>Your plants are feeling well</h1>;
      console.log('hello')
    }
  }

  clickme(something, actuallyTheContext) {
    console.log(
      'ingenting',
      something,
      ' och plantans name:',
      actuallyTheContext,
    );
    console.log(something.PlantNeedWater)
    let myNewSomething = something.state.plants.map(element => {
      if (element.name === actuallyTheContext) {
        element.plantNeedWater = false;
      }
      return element;
    });

    let myNewState = something.state;

    myNewState.plants = myNewSomething;

    this.setState(myNewState);
    localStorage.plants = JSON.stringify(myNewState.plants);
    console.log(myNewState)
    something.state.PlantNeedWater();

    
    
  }

  render() {

    return (
      <AppConsumer>
        {context => (
          <div className={this.renderClass(context.state)}>
            {this.renderTitle(context.state)}
            <div className="center">
              {context.state.plants.map(plant => {
                if (plant.plantNeedWater === true) {
                  return (
                    <PlantPop
                      name={plant.name}
                      key={plant.name}
                      amount={plant.amount}
                      ThirstyToHappy={context.state.ThirstyToHappy}
                      blabla={this.clickme.bind(this, context)}
                    />
                  );
                }
              })}
            </div>
            <Link className="center" to="/yourplants">
              Your plants
            </Link>
            <br />
            <br />
            <Link to="/addplant">
              <button className="center">Add a plant</button>
            </Link>
            <button onClick={context.state.test}>Test</button>
            {/* <button onClick={this.timer}>Set Alarm</button> */}
            <div className="state space">
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;

// var now = new Date();
// var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
// if (millisTill10 < 0) {
//      millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
// }
// setTimeout(function(){alert("It's 10am!")}, millisTill10);
