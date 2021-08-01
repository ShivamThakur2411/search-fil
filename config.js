import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC2DuyhEugrYLGlpw1VsUA9DDShNOiaCsw",
    authDomain: "storyhub-51375.firebaseapp.com",
    projectId: "storyhub-51375",
    storageBucket: "storyhub-51375.appspot.com",
    messagingSenderId: "864140306784",
    appId: "1:864140306784:web:2954a71f5ff6496314d605"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();