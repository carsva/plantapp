import React from 'react';

export const AppContext = React.createContext('plant');

// const defaultPlant = {
//         name: 'Bill',
//         amount: 2,
//         timesPerMonth: 3,
//         picture: './../plant.jpg',
//         watered: true
// };

// const MakeNewPlant = () => {
//     return {
//       ...defaultPlant,
//     };
//   };

export class AppProvider extends React.Component {
  state = {
    plants: [
      {
        name: 'Bill',
        amount: 2,
        timesPerMonth: 3,
        picture: './../plant.jpg',
        plantNeedWater: null
      },
    ],
    anyPlantNeedWater: null
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

  AnyPlantNeedWater = (value) => {
    if (value !== this.state.anyPlantNeedWater) {
      this.setState({ anyPlantNeedWater: value })
    }
    console.log(this.state.anyPlantNeedWater)
    console.log(this.state)
  };

  PlantNeedWater = () => {
    if (this.state.plants) {
      console.log('there is a plant');
      this.state.plants.map((plant) => {
        if (plant.plantNeedWater === true) {
          this.AnyPlantNeedWater(true);
        } else {
          this.AnyPlantNeedWater(false);
        }
      });
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
        changeWaterStatus: this.changeWaterStatus,
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
