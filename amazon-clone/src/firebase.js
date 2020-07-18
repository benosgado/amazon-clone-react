import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCA4_nGszSt0KWSh1oIk11miX82e6MZdII",
  authDomain: "amazo-clone-3bd75.firebaseapp.com",
  databaseURL: "https://amazo-clone-3bd75.firebaseio.com",
  projectId: "amazo-clone-3bd75",
  storageBucket: "amazo-clone-3bd75.appspot.com",
  messagingSenderId: "934833765057",
  appId: "1:934833765057:web:2e4d75b99a635f500e7240",
  measurementId: "G-55KYRSFYQ2",
});

// const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { auth };
