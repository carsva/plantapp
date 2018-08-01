import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
};

class Start extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="App">
            <p>Welcome to the nr1 plant saver app</p>
            <Link to="/home"><button>Get started</button></Link>
            <div style={styles}>
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
