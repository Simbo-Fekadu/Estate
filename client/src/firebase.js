import { initializeApp } from "firebase/app";
//the firebase is used as the connector using google accounts and anyother accounts that is based on the congirura
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-bf1f6.firebaseapp.com",
    projectId: "mern-estate-bf1f6",
    storageBucket: "mern-estate-bf1f6.appspot.com",
    messagingSenderId: "456407997693",
    appId: "1:456407997693:web:2b041172f91ed5b2353294"
};
// the firebase is initiaated in this step;
export const app = initializeApp(firebaseConfig);
