import React from 'react';

export const AppContext = React.createContext('plant');

// let plants = [
//       {
//         name: 'Ebba',
//         amount: 2,
//         timesPerMonth: 3,
//         picture: './../plant.jpg',
//         plantNeedWater: true,
//       },
//       {
//         name: 'Didrik',
//         amount: 2,
//         timesPerMonth: 3,
//         picture: './../plant.jpg',
//         plantNeedWater: true,
//       },
// ];

// localStorage.plants = JSON.stringify(plants);
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


    test = plantname => {
    console.log(plantname)
    let plants = this.state.plants;

  let filteredPlants = plants.filter(plant => {
    return plant.name !== plantname;
  })

  console.log(filteredPlants)
  this.setState ({
    plants: filteredPlants
  })
  localStorage.plants = JSON.stringify(filteredPlants);



    // deleteIceCream(flavour) {
    //   let iceCream = this.state.iceCream;
    
    //   let filteredIceCream = iceCream.filter(iceCream => {
    //     return iceCream.flavour !== flavour;
    //   })
    //   this.setState ({
    //     iceCream: filteredIceCream
    //   })
    //   localStorage.iceCream = JSON.stringify(filteredIceCream);
    
    // }
    };
 
    newPlant = (values) => {
      let plants = this.state.plants;
      plants.push({
        name: values.name,
        amount: values.amount,
        timesPerMonth: values.timesPerMonth,
        picture: values.picture,
        plantNeedWater: values.plantNeedWater
      })

      this.setState ({
        plants: plants
      })
      localStorage.plants = JSON.stringify(plants);
      console.log(localStorage.plants)
      console.log(plants)
      this.PlantNeedWater();
    } 



  AnyPlantNeedWater = value => {
      this.setState({ anyPlantNeedWater: value });
  };

  


  PlantNeedWater = () => {
    let plants = this.state.plants;
    let thirstyPlants = plants.map(plant => plant.plantNeedWater);
    if (thirstyPlants.includes('true')) {
      this.AnyPlantNeedWater('true')
    } else {
      this.AnyPlantNeedWater('false')
    }

  }


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
