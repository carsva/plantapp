import React, { Component } from 'react';

class PlantPop extends Component {
  render() {
    let ThirstyToHappy = event => {
      event.preventDefault();
      this.props.blabla(this.props.name);
    };

    return (
      <div className="pop_container">
      <div className="pop">
        <h2>{this.props.name}</h2>
        <img src={this.props.picture}/>
        <div id="drop" onClick={ThirstyToHappy}>
          <div>
            <h3 id="drop_text">{this.props.amount} dl</h3>
          </div>
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.99 162.19">
              <path
                id="Path_8"
                data-name="Path 8"
                class="cls-1"
                d="M56,162.19A55.87,55.87,0,0,1,0,106.47C0,62.32,56,0,56,0s56,62.32,56,106.47A55.81,55.81,0,0,1,56.1,162.19Z"
              />
            </svg>
           
          
        </div>
        <div/>
        
          
     
      </div>
      <div id="tap_the_drop">Tap the drop when watered</div>
      </div>
      
    );
  }
}

export default PlantPop;
