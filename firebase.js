// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-pwhRaUWbl_3TF4LId01rf0esqTxRydI",
  authDomain: "bt-database-45061.firebaseapp.com",
  projectId: "bt-database-45061",
  storageBucket: "bt-database-45061.appspot.com",
  messagingSenderId: "1088905646727",
  appId: "1:1088905646727:web:48dd2a40a97ccc75c3de22",
  measurementId: "G-GHRG25SW9R"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
// const analytics = getAnalytics(app);

export { auth };