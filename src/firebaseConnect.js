import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBFtB4RQtdSjQGaOi65LpBMJIXEP6OHf94",
    authDomain: "highland-d3920.firebaseapp.com",
    databaseURL: "https://highland-d3920.firebaseio.com",
    projectId: "highland-d3920",
    storageBucket: "highland-d3920.appspot.com",
    messagingSenderId: "1063506974337",
    appId: "1:1063506974337:web:651a62d1e246acc2795f80",
    measurementId: "G-E8KRVWJHDQ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});
export var db = firebase.firestore();