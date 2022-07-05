import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyD2aR8njFnjd8TfnvU1NgMSx00M9nNHLWo",
    authDomain: "whatsapp-clone-7d1ee.firebaseapp.com",
    projectId: "whatsapp-clone-7d1ee",
    storageBucket: "whatsapp-clone-7d1ee.appspot.com",
    messagingSenderId: " 698126854816",
    appId: "1:698126854816:web:aa5b0241b73dae8f7af7c5",
    measurementId: "G-SYF3ETJK46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const db = getFirestore(app);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;