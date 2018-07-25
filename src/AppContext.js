import React from 'react';

export const AppContext = React.createContext('plant');


export class AppProvider extends React.Component {
    state = {
      plants: [
          {
              name: 'Defaultplant'

          }
      ]
    };
    
    // testFunction = () => {
    //   alert('test')  
    // }


    render() {


      const value = {
          state: {
            ...this.state
          },
        //   test: this.testFunction,
      };
      
      return (
        <AppContext.Provider value={value}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
  
  export const AppConsumer = AppContext.Consumer;