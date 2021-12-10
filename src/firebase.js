import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAXtZn-IVQkap5DwZp4IEAPkTxZzRfSzz8",
    authDomain: "whatsapp-12603.firebaseapp.com",
    projectId: "whatsapp-12603",
    storageBucket: "whatsapp-12603.appspot.com",
    messagingSenderId: "135941050653",
    appId: "1:135941050653:web:27d64377037aebcb5c51f4"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;


