import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

let styles = {
  backgroundColor: 'yellow',
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginTop: '50px',
};

class AddPlant extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="center-objects">
            <h1>Add a plant</h1>
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();

                  const values = {
                    name: e.target.name.value,
                    amount: parseInt(e.target.amount.value),
                    waterInterval: parseInt(e.target.waterInterval.value),
                    picture: e.target.picture.value,
                  };
                  context.state.newPlant(values);
                }}
              >
                <input type="text" name="name" placeholder="Name" />
                <input type="hidden" name="picture" value="./../plant.jpg" />
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
                <select name="waterInterval">
                  <option value="0">How often?</option>
                  <option value="1">Everyday</option>
                  <option value="2">Every second day</option>
                  <option value="3">Every third day</option>
                  <option value="7">Once a week</option>
                </select>
                <button className="button-style">Add plant</button>
              </form>
              <Link to="/home">
                <button className="button-secondary-style">Back</button>
              </Link>

              {/* <div style={styles}>
                <h3>Data that lives in the context</h3>
                <pre>{JSON.stringify(context, null, 4)}</pre>
              </div> */}
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default AddPlant;
