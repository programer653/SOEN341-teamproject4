import firebase from 'firebase/compat/app';
import 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage';

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

export const firebaseapp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseapp);
export const storage = getStorage(firebaseapp);

// export default {database, storage};