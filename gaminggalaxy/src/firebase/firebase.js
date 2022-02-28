import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmdZvzLITZo4DZtDhE2-kPzH6Vb6LmZjg",
  authDomain: "netflix-clone-4a7f6.firebaseapp.com",
  projectId: "netflix-clone-4a7f6",
  storageBucket: "netflix-clone-4a7f6.appspot.com",
  messagingSenderId: "320907768090",
  appId: "1:320907768090:web:e5ce342f88350b1dc9bca3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider, db ,firebase};