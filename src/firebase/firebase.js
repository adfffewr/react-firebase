import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-storage';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();
const auth = new firebase.auth();
const storage = new firebase.storage();

export { firestore, auth, storage };
