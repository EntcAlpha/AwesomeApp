import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBujPxtGLcosisMOSrCCiwK6xmqWwo3vsg",
  authDomain: "tweetclone-be358.firebaseapp.com",
  projectId: "tweetclone-be358",
  storageBucket: "tweetclone-be358.appspot.com",
  messagingSenderId: "761799867367",
  appId: "1:761799867367:web:101853862c7721ebdd1b42",
  measurementId: "G-FSHTCP0PN5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);