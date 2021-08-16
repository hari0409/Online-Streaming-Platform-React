import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// // // // // // import { seedDatabase } from "../seed";

// Configuration
const config={
    apiKey: "AIzaSyB54eCSa1fCIBmvwzQR8LoAtEjojxju5OI",
    authDomain: "knight-313b8.firebaseapp.com",
    projectId: "knight-313b8",
    storageBucket: "knight-313b8.appspot.com",
    messagingSenderId: "905385884296",
    appId: "1:905385884296:web:4fefa16876796350343d3d"
};
const firebase=Firebase.initializeApp(config);
// // // // // // seedDatabase(firebase);
export {firebase};
