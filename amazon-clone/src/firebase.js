// import firebase from "firebase/app";
import * as firebase from 'firebase';
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';
import { initializeApp } from '@firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXN0qo01nzOXBQcnQtQRXWNC3VLsVc2j8",
  authDomain: "clone-277ce.firebaseapp.com",
  databaseURL: "https://clone-277ce-default-rtdb.firebaseio.com",
  projectId: "clone-277ce",
  storageBucket: "clone-277ce.appspot.com",
  messagingSenderId: "1052205897154",
  appId: "1:1052205897154:web:6a9523a719bd8c017c725b",
  measurementId: "G-ZQHVFMHLHQ"
};

firebase.initializeApp(firebaseConfig);

//connect component to firebase 
const auth = firebase.auth();
const database = firebase.firestore();
const storage = firebase.storage();

export{auth, database, storage};

