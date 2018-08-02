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

  test = () => {
    var dateObj = Date.now();

    let plants = this.state.plants;
    console.log(plants);

    var date = new Date();

    var mydate = new Date('2016-09-13');

    if (date < mydate) {
      alert(' The given date is Future Date');
    } else {
      alert('The given date is Past Date');
    }
    //Mockey is just the test name so you can past whatever name there.

    let UpdatedPlants = plants.map(plant => {
      if ((plant.wateringDate += dateObj)) {
        plant.plantNeedWater = true;
      }
      return plant;
    });

    // setTimeout(() => {
    //   this.setState({ plants: UpdatedPlants });
    //   localStorage.plants = JSON.stringify(UpdatedPlants);
    //   this.PlantNeedWater();
    // }, 2000);
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

    var dateObj = Date.now();

    // Add 3 days to the current date & time
    //   I'd suggest using the calculated static value instead of doing inline math
    //   I did it this way to simply show where the number came from
    dateObj += values.waterInterval * 60000;

    // create a new Date object, using the adjusted time
    dateObj = new Date(dateObj);

    console.log(dateObj);

    plants.push({
      name: values.name,
      amount: values.amount,
      waterInterval: values.waterInterval,
      timeToWatering: values.waterInterval * 60000,
      wateringDate: dateObj,
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
