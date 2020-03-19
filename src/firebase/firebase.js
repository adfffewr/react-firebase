import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();
const auth = new firebase.auth();

export { firestore, auth };
