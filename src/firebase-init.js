import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAXzCRbcCkqNrtWfuxmjkERuUCP-r1R94Y",
    authDomain: "ops-flow.firebaseapp.com",
    projectId: "ops-flow",
    storageBucket: "ops-flow.appspot.com",
    messagingSenderId: "113761901663",
    appId: "1:113761901663:web:d6814e03198d1111f48fea"
});

export const db = getFirestore();



// import firebase from "firebase/app";
// import "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyAXzCRbcCkqNrtWfuxmjkERuUCP-r1R94Y",
//     authDomain: "ops-flow.firebaseapp.com",
//     projectId: "ops-flow",
//     storageBucket: "ops-flow.appspot.com",
//     messagingSenderId: "113761901663",
//     appId: "1:113761901663:web:d6814e03198d1111f48fea"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default firebaseApp.firestore();