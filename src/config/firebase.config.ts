import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtSaukdurWlwNZAoSsgurLcwESDDUYY48",
  authDomain: "codepen-clone-18c9a.firebaseapp.com",
  projectId: "codepen-clone-18c9a",
  storageBucket: "codepen-clone-18c9a.appspot.com",
  messagingSenderId: "654753535127",
  appId: "1:654753535127:web:724c0da70c3173f0d605d2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
