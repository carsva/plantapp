import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Start extends Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <div>
            {context.state.name}
            <pre>{JSON.stringify(context, null, 4)}</pre>
            <button onClick={context.test}>Funktionstest</button>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
