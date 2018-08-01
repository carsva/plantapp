import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

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
          <div>
            <h1>Your plants</h1>
            {context.state.plants.map(({ name }) => (
              <div className="center">
                 <Link to={`/plant/${name}`}>{name}</Link>
              </div>
            ))}

            <Link to="/home">
              <button className="center topspace">Back</button>
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
