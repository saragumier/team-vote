import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBA6dwQZPT12CawZnAWY7N3bLsGtNfkuUw",
    authDomain: "team-voting-72a82.firebaseapp.com",
    databaseURL: "https://team-voting-72a82-default-rtdb.firebaseio.com",
    projectId: "team-voting-72a82",
    storageBucket: "team-voting-72a82.appspot.com",
    messagingSenderId: "986695196845",
    appId: "1:986695196845:web:049a579020fc9ac686e624"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();