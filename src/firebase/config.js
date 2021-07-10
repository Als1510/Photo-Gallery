import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqasLz-9eYRsBVW6g_I3KRS4Zmkhs819E",
  authDomain: "photo-gallery-dbe2a.firebaseapp.com",
  projectId: "photo-gallery-dbe2a",
  storageBucket: "photo-gallery-dbe2a.appspot.com",
  messagingSenderId: "1082982593654",
  appId: "1:1082982593654:web:fba0ddd6d3b694226c1b57",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};