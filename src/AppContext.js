import React from 'react';

export const AppContext = React.createContext('plant');

const defaultPlant = {
        name: 'Bill',
        amount: 2,
        timesPerMonth: 3,
        picture: './../plant.jpg',
};

const MakeNewPlant = () => {
    return {
      ...defaultPlant,
    };
  };


export class AppProvider extends React.Component {

  state = {
    plants: [
      {
        ...MakeNewPlant(),
      },
    ],
  };

  // testFunction = () => {
  //   alert('test')
  // }
  newPlant = values => {
    console.log('values', values)
    this.setState({
      ...this.state,
      plants: [
        ...this.state.plants,
        {
        ...MakeNewPlant(),
        ...values,
        },
      ],
    });
  };

  render() {
    const value = {
      state: {
        ...this.state,
        newPlant: this.newPlant,
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
