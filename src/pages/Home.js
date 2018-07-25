import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
};

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="App">
            <Link to="/addplant"><button>Add a plant</button></Link>
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

export default Home;