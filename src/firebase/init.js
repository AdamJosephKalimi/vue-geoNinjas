import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyD0PHRFpH5DHzYzjKIb5W7EGkxeVYILiJA",
authDomain: "udemy-geo-ninjas-4713c.firebaseapp.com",
databaseURL: "https://udemy-geo-ninjas-4713c.firebaseio.com",
projectId: "udemy-geo-ninjas-4713c",
storageBucket: "udemy-geo-ninjas-4713c.appspot.com",
messagingSenderId: "146670411577",
appId: "1:146670411577:web:ff28f57d8cc5a40a2912e8",
measurementId: "G-HR9J8QGP1Q"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// imports the db from firebase
export default firebaseApp.firestore()