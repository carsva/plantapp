import React from 'react';

export const AppContext = React.createContext('plant');


export class AppProvider extends React.Component {
    state = {
      name: 'Calle'
    };
  
    render() {
      const value = {
          state: {
            ...this.state
          },
          test: () => {
              alert('test');
          }
      };
      
      return (
        <AppContext.Provider value={value}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
  
  export const AppConsumer = AppContext.Consumer;