import React from 'react';

export const AppContext = React.createContext('plant');

let plants = [];

if (localStorage.plants) {
  let localPlants = JSON.parse(localStorage.plants);
  plants = localPlants;
}

export class AppProvider extends React.Component {
  state = {
    plants: plants,
    anyPlantNeedWater: null,
  };

  test = interval => {
    console.log('test is called');
    var now = new Date();
    var futureDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      7,
      55,
      0,
      0,
    );

    var millisecondsLeft = futureDate - now;

    setTimeout(alertFunc, millisecondsLeft);

    function alertFunc() {
      alert('Works');
    }
  };

  deletePlant = plantname => {
    let plants = this.state.plants;

    let filteredPlants = plants.filter(plant => {
      return plant.name !== plantname;
    });

    this.setState({
      plants: filteredPlants,
    });
    localStorage.plants = JSON.stringify(filteredPlants);
    this.PlantNeedWater();
  };

  newPlant = values => {
    let plants = this.state.plants;
    plants.push({
      name: values.name,
      amount: values.amount,
      waterInterval: values.waterInterval,
      picture: values.picture,
      plantNeedWater: values.plantNeedWater,
    });

    this.setState({
      plants: plants,
    });
    localStorage.plants = JSON.stringify(plants);
    this.PlantNeedWater();
  };

  AnyPlantNeedWater = value => {
    this.setState({ anyPlantNeedWater: value });
  };

  PlantNeedWater = () => {
    let plants = this.state.plants;
    let thirstyPlants = plants.map(plant => plant.plantNeedWater);
    if (thirstyPlants.includes(true)) {
      this.AnyPlantNeedWater(true);
    } else {
      this.AnyPlantNeedWater(false);
    }
  };

  componentWillMount() {
    this.PlantNeedWater();
  }

  render() {
    const value = {
      state: {
        ...this.state,
        newPlant: this.newPlant,
        ThirstyToHappy: this.ThirstyToHappy,
        PlantNeedWater: this.PlantNeedWater,
        test: this.test,
        deletePlant: this.deletePlant,
      },
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
