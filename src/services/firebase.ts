import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyDsOfQkzdVogq01A9j6vTmbPobtxCMbs7M",
    authDomain: "letmeask-ae094.firebaseapp.com",
    databaseURL: "https://letmeask-ae094-default-rtdb.firebaseio.com",
    projectId: "letmeask-ae094",
    storageBucket: "letmeask-ae094.appspot.com",
    messagingSenderId: "55605425736",
    appId: "1:55605425736:web:b4c1e6ec621c7fe9e5ca7d"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export { firebase, auth, database }