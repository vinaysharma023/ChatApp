import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDBEv2k8CRtuE40xPma1s82T4Qj2TUNgSo",
    authDomain: "react-slack-app-7d6d5.firebaseapp.com",
    databaseURL: "https://react-slack-app-7d6d5.firebaseio.com",
    projectId: "react-slack-app-7d6d5",
    storageBucket: "react-slack-app-7d6d5.appspot.com",
    messagingSenderId: "788900350114",
    appId: "1:788900350114:web:7acae04c4803600addeffb",
    measurementId: "G-ZQTD4EWLZD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;