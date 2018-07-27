import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class Water extends Component {
  render() {
    // newPlant = values => {
    //   console.log('values', values)
    //   this.setState({
    //     ...this.state,
    //     plants: [
    //       ...this.state.plants,
    //       {
    //       ...MakeNewPlant(),
    //       ...values,
    //       },
    //     ],
    //   });
    // };

    var watermap = () => {
      var plants = this.props.plants;

      if (!plants) {
        return <div>You have no plants</div>;
      } else {
        return plants.map(plant => {
          if (plant.watered === false) {
            return <div>Some plants need water</div>;
          } else {
            return <div>Plants are happy</div>;
          }
        });
      }
    };
    return (
      <div className="App">
        <h1>{watermap()}</h1>
      </div>
    );
  }
}

class Home extends Component {
  /*this timer below is now working and sets alarm the time and date as
  in the code below. The timer starts with getting the current time. We
  create the variable millistill10 and sets it to the same day as now
  except we set the alarm to go off at 08:44 am.

  timer() {
    var now = new Date();
    var millisTill10 =
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 44, 0, 0) -
      now;

      setTimeout(function() {
        alert("Alarm");
      }, millisTill10);
    
    }

    */

  render() {
    const isWatered = () => {};

    return (
      <AppConsumer>
        {context => (
          <div className="App background-watered">
            <Water plants={context.state.plants} />
            <Link to="/yourplants">Your plants</Link>
            <br />
            <br />
            <Link to="/addplant">
              <button>Add a plant</button>
            </Link>
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
