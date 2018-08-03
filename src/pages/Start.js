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
          <div className="center-objects">
            <h1>Lets save some plants</h1>
            <Link to="/home"><button className="button-style">Get started</button></Link>
            {/* <div style={styles}>
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div> */}
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
