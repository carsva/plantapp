import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class Plant extends Component {
  render() {
    let paramId = this.props.match.params.id;

    return (
      <AppConsumer>
        {context => (
          <div className="state">
            <h3>The plant {paramId}'s page</h3>
            {context.state.plants.map(plant => {
              if (plant.name === paramId) {
                return (
                  <div>
                    <img src={plant.picture}/>
                    Please give it {plant.amount} dl water,{' '}
                    {plant.timesPerWeek} times a week
                  </div>
                );
              }
            })}
            <Link to="/home">
              <button>Back</button>
            </Link>

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

export default Plant;

// {context.state.plants.map(plant => {
//   if(plant.name === paramId) {
//     console.log(plant.name)
//     console.log(plant.picture)
//     console.log(plant.amount)
//     console.log(plant.timesPerMonth)
//   } else {

//   }
// })}
