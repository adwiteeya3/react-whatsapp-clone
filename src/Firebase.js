import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBRk3ZVGqi7rEZ9nRQR5b6ekw3w0H7U5JA",
  authDomain: "whatsapp-clone-b9911.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-b9911.firebaseio.com",
  projectId: "whatsapp-clone-b9911",
  storageBucket: "whatsapp-clone-b9911.appspot.com",
  messagingSenderId: "430841645396",
  appId: "1:430841645396:web:d750e3845001dac39160c1",
  measurementId: "G-E9CCZGC8NG"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;