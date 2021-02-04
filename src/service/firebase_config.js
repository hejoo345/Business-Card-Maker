import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

  const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    apiKey: "AIzaSyCS9JtGvJWpcIRPV1UlL1UTDceMTNBZokI",
    authDomain: "business-card-maker-f2bd1.firebaseapp.com",
    databaseURL: "https://business-card-maker-f2bd1-default-rtdb.firebaseio.com",
    projectId: "business-card-maker-f2bd1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export default firebaseApp;
