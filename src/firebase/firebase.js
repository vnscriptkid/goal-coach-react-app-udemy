import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBsdqTlObk7Zt1P9T2y0SM0wWH5iVDyHVw",
    authDomain: "goal-coach-react-app-udemy.firebaseapp.com",
    databaseURL: "https://goal-coach-react-app-udemy.firebaseio.com",
    projectId: "goal-coach-react-app-udemy",
    storageBucket: "",
    messagingSenderId: "567965881947"
};
export const firebaseApp = firebase.initializeApp(config);






