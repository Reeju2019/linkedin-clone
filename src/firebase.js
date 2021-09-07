import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzaVc3-_IBtuLploV7aWxh2hknSgfPYDU",
  authDomain: "linkedin-clone-3d203.firebaseapp.com",
  projectId: "linkedin-clone-3d203",
  storageBucket: "linkedin-clone-3d203.appspot.com",
  messagingSenderId: "294352444808",
  appId: "1:294352444808:web:424bc44fc8ab70c0656e3d",
  measurementId: "G-ZCRCBHWXPJ",
};

const firebaseApp = firebase.initialzeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
