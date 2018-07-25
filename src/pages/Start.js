import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Start extends Component {
  render() {
    return (
      <AppConsumer>
        {state => (
          <div>
            {state.name}
            <pre>{JSON.stringify(state, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
