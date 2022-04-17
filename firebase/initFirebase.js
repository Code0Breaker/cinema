import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";
import { child, get, getDatabase, limitToFirst, limitToLast, query, ref } from "firebase/database";
import 'firebase/firestore';
import 'firebase/database';
const clientCreds = {
  apiKey: "AIzaSyAk1SjSts0jKQCaILcuEOKCZ3sVXFqKI0Q",
  authDomain: "films-f5bd1.firebaseapp.com",
  databaseURL:
    "https://films-f5bd1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "films-f5bd1",
  storageBucket: "films-f5bd1.appspot.com",
  messagingSenderId: "745800865853",
  appId: "1:745800865853:web:c9b09de73d010d0fa7b254",
};

export const app = initializeApp(clientCreds);
export const db = getDatabase(app);
export const dbRef = ref(db,'data/all')
//-N-n96b-B73cUW-JmGP9




