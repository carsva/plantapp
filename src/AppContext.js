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
      console.log('called')
      this.setState({ anyPlantNeedWater: value });
  };

  


  PlantNeedWater = () => {
    console.log('called')
    let plants = this.state.plants;
    let thirstyPlants = plants.map(plant => plant.plantNeedWater);
    if (thirstyPlants.includes(true)) {
      this.AnyPlantNeedWater(true)
    } else {
      this.AnyPlantNeedWater(false)
    }

  }


  // ThirstyToHappy = name => {
  //   console.log(name + ' went from thirsty to happy');
   
  //   let plants = this.state.plants;
  //   plants.map(plant => {
  //     if (plant.name === name) {
  //       this.setState({
  //         plants: [
  //           {
  //             name: name,
  //             amount: 2,
  //             timesPerMonth: 3,
  //             picture: './../plant.jpg',
  //             plantNeedWater: false,
  //           },
  //         ],
  //       });
  //       console.log(plants)
  //       this.PlantNeedWater();
  //     }
  //   });
  // };

  /*

editPlant = (id, newValues) => {
    {
    }

    this.setState({
      ...this.state,
      plants: this.state.plants.map(plant => {
        if (plant.id === id) {
          return {
            ...plant,
            ...newValues,
          };
        }
        return plant;
      }),
    });
  };
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
        PlantNeedWater: this.PlantNeedWater,
        test: this.test,
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
