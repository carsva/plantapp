import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Start from './pages/Start';
import Home from './pages/Home';
import AddPlant from './pages/AddPlant';
import yourPlants from './pages/yourPlants';
import Plant from './pages/Plant';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div>
            <div>
              <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/home" exact component={Home} />
                <Route path="/addplant" exact component={AddPlant} />
                <Route path="/yourplants" exact component={yourPlants} />
                <Route path="/plant/:id" component={Plant} />
              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
