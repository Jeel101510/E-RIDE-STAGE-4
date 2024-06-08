import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDOpXYIkgTX6ov3tQN8_brIEsXaplAHwI4",
    authDomain: "pro-class-71.firebaseapp.com",
    projectId: "pro-class-71",
    storageBucket: "pro-class-71.appspot.com",
    messagingSenderId: "759106332756",
    appId: "1:759106332756:web:7ffe2b0ec8007503fe25c1"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
