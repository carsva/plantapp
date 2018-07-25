import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px'
};

class Start extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            {context.state.plants[0].name}
            <div style={styles}>
            <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
              {/* <button onClick={context.test}>Funktionstest</button> */}
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
