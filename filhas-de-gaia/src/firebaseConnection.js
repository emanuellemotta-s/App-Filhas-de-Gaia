import { initializeApp } from "firebase/app";
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD9kjMM2NAoofmCrlIBBysAgifsVjjcquI",
    authDomain: "filhasdegaia-d3c39.firebaseapp.com",
    projectId: "filhasdegaia-d3c39",
    storageBucket: "filhasdegaia-d3c39.appspot.com",
    messagingSenderId: "143594884709",
    appId: "1:143594884709:web:d84578746b24c838b8c08c",
    measurementId: "G-SF0LJNG2YR"
};

const app = initializeApp(firebaseConfig);

export default app;