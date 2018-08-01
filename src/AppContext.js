import React from 'react';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    plants: [
      {
        name: 'Bill',
        amount: 2,
        timesPerMonth: 3,
        picture: './../plant.jpg',
        plantNeedWater: true,
      },
      {
        name: 'Ted',
        amount: 2,
        timesPerMonth: 3,
        picture: './../plant.jpg',
        plantNeedWater: true,
      },
    ],
    anyPlantNeedWater: null,
  };

  // testFunction = () => {
  //   alert('test')
  // }

  newPlant = values => {
    this.setState({
      ...this.state,
      plants: [
        ...this.state.plants,
        {
          // ...MakeNewPlant(),
          ...values,
        },
      ],
    });
  };

  AnyPlantNeedWater = value => {
    if (value !== this.state.anyPlantNeedWater) {
      this.setState({ anyPlantNeedWater: value });
    }
  };

  PlantNeedWater = () => {
    if (this.state.plants) {
      this.state.plants.map(plant => {
        if (plant.plantNeedWater === true) {
          this.AnyPlantNeedWater(true);
        } else {
          this.AnyPlantNeedWater(false);
        }
      });
    }
  };

    ThirstyToHappy(name) {
      console.log(name + ' went from thirsty to happy')
      /*
      let plants = this.state.plants;
    
      let filteredIceCream = iceCream.filter(iceCream => {
        return iceCream.flavour !== flavour;
      })
      this.setState ({
        iceCream: filteredIceCream
      })
      localStorage.iceCream = JSON.stringify(filteredIceCream);
*/
  }

/*
var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.body.innerHTML = randomItem;
*/

  componentWillMount() {
    this.PlantNeedWater();
  }

  render() {
    const value = {
      state: {
        ...this.state,
        newPlant: this.newPlant,
        ThirstyToHappy: this.ThirstyToHappy,

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
