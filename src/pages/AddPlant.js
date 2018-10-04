import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import $ from 'jquery';
import uploadcare from 'uploadcare-widget';

class AddPlant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      image: "",
    };
  }

  error = () => {
    if(this.state.error === true) {
    return  <Message
    error
    header='Please fill all fields'
  />
  }
  }

  test = () => {
    
    uploadcare.openDialog(null, {
      imagesOnly: true
    }).done((file) => {
      file.promise().done((fileInfo) => {
        console.log("From inside promise " + fileInfo.cdnUrl);
        this.setState({
          image: fileInfo.cdnUrl,
        })
        console.log(this.state)

      });
    });
  }

  render() {

    
   
    return (
      <AppConsumer>
        {context => (
          <div className="ui center aligned container">
          <svg id="small_logo" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719.15 564.17"><title>plantylogo</title><path d="M629.82,781.3c-.83,11-1.41,22.08-3.1,33-.32,1.89-2,3.57-5,5.06A31,31,0,0,1,615,822a12.16,12.16,0,0,1-9.34-1.67c-2.74-1.78-4.62-4.91-5.64-9.36q1.89-36.15,4.32-72.27c1.79-22.5,3.64-45,5.35-67.5-.16-1-1.45-3.51-3.14-7.38-1-2.33-1.9-4.79-2.81-6.94s-1.55-3.78-1.92-4.87c0-2.14,1.47-4.15,4.47-6a24.88,24.88,0,0,1,8.7-3.49,22.3,22.3,0,0,1,13.09,2c4.52,2,7.34,5,8.47,8.72.08,2.56.12,3.84.21,6.39a39,39,0,0,1,27.87-18.22c9.87-1.44,18.8-.51,26.57,2.91a43,43,0,0,1,18.69,15.61,51,51,0,0,1,8.59,24,95.37,95.37,0,0,1-3.26,35c-3,10.76-9.81,21-18.35,28.75-9.16,8.34-20.92,13.24-33,15.21q-6.36,1-17.09-1.41t-14.94-7.65C631.83,754.77,631.13,764,629.82,781.3ZM634.65,726a16.81,16.81,0,0,0,5.85,9.88,27.67,27.67,0,0,0,10.2,5.55c3.74,1.09,6.75,1.45,9.07,1.07a28,28,0,0,0,18.06-11.18,56.64,56.64,0,0,0,10.12-22,65.7,65.7,0,0,0,1.5-23.45,29.2,29.2,0,0,0-8.17-17.12c-4.56-4.65-9.8-6.54-15.64-5.65q-9.82,1.51-15.53,6.51a81.09,81.09,0,0,0-12.35,14.5Q636,703,634.48,721.85A24.27,24.27,0,0,0,634.65,726Z" transform="translate(-600.04 -258.1)"/><path d="M783.43,620.17c-7,40.71-12.6,81.74-20.22,122.34q-.36,1.5-4.69,4.31c-2.89,1.87-4.9,2.88-6,3a22.84,22.84,0,0,1-11.9-1.61q-5.51-2.36-6.85-9.77.1-1.23.48-6.9t1.4-12.41c4.61-29,9.07-58,13.66-87q4-23.94,8.25-47.82a24.17,24.17,0,0,1-.65-4.07,23.31,23.31,0,0,1,4.6-16.72q5.49-7.3,13.41-8A15.84,15.84,0,0,1,785,558.32q4.9,3.13,8.14,9.94Q788.13,594.19,783.43,620.17Z" transform="translate(-600.04 -258.1)"/><path d="M903.28,734.82q-.46,1.45-4.28,3a19.82,19.82,0,0,1-6.56,1.64c-6,.18-10.26-.5-12.89-2.08A8.48,8.48,0,0,1,875.4,730a47,47,0,0,1,.64-9.66q-5.25,7.43-15.65,12.61c-6.93,3.47-12.63,5.24-16.83,5.59-8.9.74-21.09-2-28.38-7.59-8.91-6.82-12.66-18.47-13.38-29.27A73.25,73.25,0,0,1,835,634.73a75.65,75.65,0,0,1,39.28-12.17,40.59,40.59,0,0,1,11.15,1.71,47.08,47.08,0,0,1,14,6.65,41.84,41.84,0,0,1,11.93,12.4,9.44,9.44,0,0,1,5,1.85q2.89,1.89,2.93,3.81a12.65,12.65,0,0,1-.72,4.33q-8.92,35.07-17.29,70.26A71.85,71.85,0,0,0,903.28,734.82Zm-21.72-87c-3.12-2.31-5.91-3.42-8.35-3.34A36.49,36.49,0,0,0,851,653.25a59.14,59.14,0,0,0-15.92,20.25c-3.84,8-5.52,15.39-5.1,22.29s1.59,12.24,3.53,16.47,5.33,6.2,10.2,5.93c4.19-.23,8.94-1.69,14.29-4.36a52.13,52.13,0,0,0,14.24-10.38q6.22-6.39,8-13.18,3.78-16.86,7.66-33.7A17.36,17.36,0,0,0,881.56,647.85Z" transform="translate(-600.04 -258.1)"/><path d="M977.39,613.49c6,.11,9.32,3,9.91,8.59q-5.64,17.68-11.09,35.44c9-11.57,20.16-23.49,32.88-30.61,7.42-4.16,18.39-8,27.26-7.59,9.31.49,16.1,2.4,20.24,5.74s6.09,8.37,5.88,15c-6.19,13.41-12.44,27.08-16.91,40.83a167.86,167.86,0,0,0-7.51,36.17c-.11,2.19-.16,3.29-.27,5.48q-.32,6.67-4.28,8.52c-2.65,1.24-7.79,1.69-15.44,1.42a24,24,0,0,1-8.32-1.71c-2.55-1-3.8-2.68-3.72-4.89.35-9.4,3-18.93,5.44-27.8,3.33-12,7.43-24.1,11.7-35.9s6.55-17.32,6.53-16.69c.09-2.22-1.26-3.4-4-3.52-3.66-.16-9.8,2.52-18.05,8.16-10.21,7-18.48,16.92-25.5,27-9.8,14-15.58,30.44-20.4,46.8q-.26,1.44-1,5.27a7.16,7.16,0,0,1-4,5.37c-2.17,1-5.66,1.55-10.47,1.56q-8.22,0-12.22-1.6c-2.66-1.1-4-3.48-4.05-7.16q3.6-15.4,7.35-30.78c2.53-10.62,5.18-21.22,7.84-31.8q5.74-22.78,11.59-45.61C965,615.26,971.91,613.38,977.39,613.49Z" transform="translate(-600.04 -258.1)"/><path d="M1105.5,715.63a12.21,12.21,0,0,0,2.3,8.91c1.84,2.32,4.59,3.64,8.28,4,5,.48,9.3-.48,12.84-2.89a71.25,71.25,0,0,0,11.65-10.57,57.68,57.68,0,0,1,7.41-7,8.26,8.26,0,0,1,6.11-1.67c4.42.52,7.51,1.42,9.26,2.67s2.45,3.45,2.09,6.59a30.45,30.45,0,0,1-1.09,5,15.15,15.15,0,0,1-1.76,4.2c-4.83,7.65-14.22,14.61-22,18.42-8.76,4.3-21.8,6.7-31.62,5.62-11.21-1.23-19.84-4.36-25.27-10.09s-7.85-13.48-7.18-23.3q.14-2.13,3-11c1.94-5.91,4.39-13,7.4-21.17q4.56-13.24,9.24-26.46c-6.39-.06-9.58-.07-16-.05a5.47,5.47,0,0,1-4.54-2.47,8.74,8.74,0,0,1-1.22-5.33c.26-4,2.08-7.82,5.49-11.55.38-.45,2.17-.8,5.35-1s7.08-.41,11.68-.5c2.86,0,4.29-.07,7.16-.1Q1110,618.89,1116,602a20.35,20.35,0,0,1,9-8.78,19.52,19.52,0,0,1,10.68-2.35,15,15,0,0,1,8.89,3.84q3.5,3.25,3.38,7.07-6.59,17.14-13,34.37,10.41-.08,19.34.15c6,.14,10.6.44,14,.86,6.69.84,9.63,4.74,8.83,11.64-.32,2.67-1.87,4.89-4.64,6.69a16.81,16.81,0,0,1-8.67,2.84q-18.43-.61-36.89-.83Q1116,686.52,1105.5,715.63Z" transform="translate(-600.04 -258.1)"/><path d="M1210.71,726.4a11.63,11.63,0,0,0,1.66,8.37q2.34,3.45,8.36,4.37c5.19.8,11,.28,17.45-1.54a57.42,57.42,0,0,0,17-7.7c3.12-7,4.68-10.54,7.83-17.55q8.6-19.3,18.08-38.19a47.06,47.06,0,0,1,10-13.85c3.73-3.39,8.93-4.47,15.54-3.22,9.23,1.74,13.36,5.11,12.42,10a8.85,8.85,0,0,1-1.2,2.76,24.16,24.16,0,0,0-1.46,2.71q-8.67,18.07-17.14,36.24c-9.74,21.55-19,43.95-29.9,64.4-7.52,14-16.57,27.73-31.09,35.82-13.45,7.5-30.65,7.3-45.46,5.24-11.23-1.56-18.6-4.17-22.08-7.88a15.11,15.11,0,0,1-4.38-12.61,9.29,9.29,0,0,1,4.42-6.83,11.85,11.85,0,0,1,8.33-2,16.25,16.25,0,0,1,5.65,1.6,22.65,22.65,0,0,1,4.2,3.08,26.3,26.3,0,0,0,5.43,4,27.06,27.06,0,0,0,8.38,2.28c2.76.41,6.24-.2,10.46-1.78a39.7,39.7,0,0,0,12.9-8.64,56.1,56.1,0,0,0,11.42-16c3.74-7.71,5.62-11.56,9.41-19.25a70.11,70.11,0,0,1-18.15,8.41c-5.66,1.57-12,1.62-18.4.87-8.19-.95-19.12-6.3-24-13.23s-7-18.61-5.73-26.8a44.57,44.57,0,0,1,2.8-10.13q11.89-28.71,24.19-57.26c-2.36-3.22-3.54-4.82-5.92-8a2.17,2.17,0,0,1-.58-1.75q.3-2.36,6.31-3c4-.45,9.45-.17,16.31.89,11.26,1.73,16.71,7.5,16.34,17.16Q1226,689,1212.26,720.89A21.4,21.4,0,0,0,1210.71,726.4Z" transform="translate(-600.04 -258.1)"/><path d="M954.48,587c21.76,4.93,68,11.31,106-11.41,49.74-29.74,62.76-96.12,63.3-98.94l1.65-8.93-8.65-2.76s-2-.66-5.65-1.57c-19.87-5-70.51-14-111.46,10.52a106.47,106.47,0,0,0-21,16.67l6-24c14.19-8.18,60-37.82,72.19-86.22,14.14-56.22-23.6-112.36-25.21-114.72l-5.14-7.49-8.07,4.18c-2.54,1.32-62.35,32.93-76.49,89.14-12.17,48.41,14.17,96.19,22.8,110.11l-14,55.47a106.83,106.83,0,0,0-10.58-24.6c-24.49-40.95-73.36-57-93.23-62-3.62-.91-5.72-1.3-5.72-1.3l-8.95-1.66-2.75,8.65c-.86,2.74-20.79,67.38,9,117.11,22.71,38,66.51,54.28,88.33,58.07L922,634l17,3Zm55.77-95.47c31.89-19.07,73.32-13.18,91-9.35C1096.19,500,1081.82,538.92,1050,558c-30.56,18.27-69.81,13.36-88,9.6,12.73-11.8,36.11-31.26,66.48-46.64a292.19,292.19,0,0,1,51.47-20l-3.09-10.78a293.74,293.74,0,0,0-111.5,59.38C972.93,530.41,986.72,505.59,1010.25,491.52ZM962,356.43c9-35.83,42.15-60.89,57.77-71,9,16.25,26.35,53.9,17.3,89.87-7.83,31.11-33.8,53.83-50.68,65.76l31.79-126.41-10.86-2.73-31.8,126.44C966.27,420,954.12,387.69,962,356.43Zm-115,95.18c17.45,5,56.7,19.43,75.77,51.32,14,23.42,14.43,51.8,12.09,72.31a293.46,293.46,0,0,0-70.12-105l-7.8,8a291.89,291.89,0,0,1,35.89,41.92c19.48,27.93,30.88,56.13,36.51,72.56-17.84-5.32-54.74-19.58-73-50.13C837.32,511,843,469.81,846.94,451.61Z" transform="translate(-600.04 -258.1)"/></svg>
          <div className="title_container">
            <h1 className="title">Add a plant</h1> 
            </div>
            {this.error()}
            <div>
            <button onClick={this.test} className="upload-image-button">Test</button>
              <form
                onSubmit={e => {
                  e.preventDefault();

                  const values = {
                    name: e.target.name.value,
                    amount: parseInt(e.target.amount.value),
                    waterInterval: parseInt(e.target.waterInterval.value),
                    picture: this.state.image,
                  };

                  if(values.name === "" || values.amount === 22 || values.waterInterval === 22) {
                   this.setState({
                     error: true,
                   })

                  } else {
                    context.state.newPlant(values);
                    this.setState({
                      error: false,
                    })
                    this.props.history.push('/home');
                  }
                }}
              >
              
                <div className="ui form plant_form">
                <div className="field"><input type="text" name="name" placeholder="Name" /></div>
                <div className="field"><input type="hidden" name="picture" value="./../plant.jpg"/></div>
                <div className="field"><select name="amount">
                  <option value="22">Amount of water (dl):</option>
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
                  
                </select></div>
                <select name="waterInterval">
                  <option value="22">How often?</option>
                  <option value="1">Everyday</option>
                  <option value="2">Every second day</option>
                  <option value="3">Every third day</option>
                  <option value="7">Once a week</option>
                  <option value="0">test</option>
                </select>
                
                
                <button id="standard_button" className="ui button big wider_button">Add plant</button>
                </div>
              </form>
              
              </div>
              <Link to="/home">
                <button id="standard_button_orange" className="ui button big wider_button">Back</button>
              </Link>

              {/* <div style={styles}>
                <h3>Data that lives in the context</h3>
                <pre>{JSON.stringify(context, null, 4)}</pre>
              </div> */}
            </div>
        )}
      </AppConsumer>
    );
  }
}

export default AddPlant;
