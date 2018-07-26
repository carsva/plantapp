import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
};

class yourPlants extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="App">
            <p>Your plants</p>
            {context.state.plants.map(({ name }) => (
              <div>
                 <Link to={`/plant/${name}`}>{name}</Link>
              </div>
            ))}

            <Link to="/home">
              <button>Back</button>
            </Link>
            <div className="state">
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default yourPlants;
