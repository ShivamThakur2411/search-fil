import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDH-n8SpVdNPt8er3rIjCsHSIK9851Lo64",
  authDomain: "bedtimestories-9dc34.firebaseapp.com",
  projectId: "bedtimestories-9dc34",
  storageBucket: "bedtimestories-9dc34.appspot.com",
  messagingSenderId: "755781079388",
  appId: "1:755781079388:web:de4fa14ef20860f2b83199",
  measurementId: "G-V0NB4X32D6"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();