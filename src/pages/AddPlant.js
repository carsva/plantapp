import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
};

class AddPlant extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
          <h1 className="center topspace">Add a plant</h1>
          <div className="App">
            <form
							onSubmit={e => {
								e.preventDefault();

								const values = {
									name: e.target.name.value,
									amount: parseInt(e.target.amount.value),
                  timesPerMonth: parseInt(e.target.timesPerMonth.value),
                  picture: e.target.picture.value,
                  plantNeedWater: e.target.picture.value,
								};

								context.state.newPlant(values);
							}}
						>
              
              <input type="text" name="name" placeholder="Name" />
							<br />
              <input type="hidden" name="plantNeedWater" value="false"/>
              <input type="hidden" name="picture" value="./../plant.jpg"/>
              <select name="amount">
                <option value="0">Amount of water (dl):</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br />
              <select name="timesPerMonth">
                <option value="0">Times per month:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br />
              <button>Add plant</button>
            </form>
            <Link to="/home">
              <button>Back</button>
            </Link>

            <div style={styles}>
              <h3>Data that lives in the context</h3>
              <pre>{JSON.stringify(context, null, 4)}</pre>
            </div>
          </div>
          </div>
        )}
      </AppConsumer>
    );
    
  }
}

export default AddPlant;
