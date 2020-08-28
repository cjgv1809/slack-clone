import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA63Rslj4tkLElClj2gfdq8YcJoR8rBxEo",
  authDomain: "slack-clone-5fe5f.firebaseapp.com",
  databaseURL: "https://slack-clone-5fe5f.firebaseio.com",
  projectId: "slack-clone-5fe5f",
  storageBucket: "slack-clone-5fe5f.appspot.com",
  messagingSenderId: "248011823742",
  appId: "1:248011823742:web:d46dbfce26d8694c6e562f",
  measurementId: "G-ENXY4SCJRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
