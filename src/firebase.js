// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRvog_Vqp-5w32P5bXtgcCSSQCFRNRiTA",
    authDomain: "totality-assignment-721c4.firebaseapp.com",
    databaseURL: "https://totality-assignment-721c4-default-rtdb.firebaseio.com",
    projectId: "totality-assignment-721c4",
    storageBucket: "totality-assignment-721c4.appspot.com",
    messagingSenderId: "804011459570",
    appId: "1:804011459570:web:f96942325f45618d80616b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
