import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Start from './pages/Start';
import Home from './pages/Home';
import AddPlant from './pages/AddPlant';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="center">
            <div>
              <Switch>
                <Route path="/" exact component={Start} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/addplant" exact component={AddPlant} />

              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
