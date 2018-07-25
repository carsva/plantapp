import React from 'react';

export const AppContext = React.createContext('plant');


export class AppProvider extends React.Component {
    state = {
      plants: [
        {

        },
      ],
    };
  
    render() {
      const value = {
    ...this.state
      };
      
      return (
        <AppContext.Provider value={value}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
