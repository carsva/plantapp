import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCVldo2NDXx8u2yl_k9hC3GYh1nlrNW1a8",
    authDomain: "planty-6dbf1.firebaseapp.com",
    databaseURL: "https://planty-6dbf1.firebaseio.com",
    projectId: "planty-6dbf1",
    storageBucket: "planty-6dbf1.appspot.com",
    messagingSenderId: "502896880906"
  };
  firebase.initializeApp(config);

export default firebase;