import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyC80pFohXqy9F61Dfmi8TNg2RSrYG3h_EI",
    authDomain: "groceryapp-b53a0.firebaseapp.com",
    databaseURL: "https://groceryapp-b53a0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "groceryapp-b53a0",
    storageBucket: "groceryapp-b53a0.appspot.com",
    messagingSenderId: "134196112254",
    appId: "1:134196112254:web:f9ef33eda82852dc01212f",
    measurementId: "G-NG6MB1F2QN"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };