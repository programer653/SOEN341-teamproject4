import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXN0qo01nzOXBQcnQtQRXWNC3VLsVc2j8",
    authDomain: "clone-277ce.firebaseapp.com",
    projectId: "clone-277ce",
    storageBucket: "clone-277ce.appspot.com",
    messagingSenderId: "1052205897154",
    appId: "1:1052205897154:web:6a9523a719bd8c017c725b",
    measurementId: "G-ZQHVFMHLHQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = firebase.auth();

export { db, auth };