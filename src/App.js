import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Start from './pages/Start';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="center">
            <div>
              <Switch>
                <Route path="/" exact component={Start} />
              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
