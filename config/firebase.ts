
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/app'

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import { store } from '../src/redux/store'
import { AUTH } from 'redux/actions/actionTypes'

const firebaseConfig = {
  apiKey: "AIzaSyBwaeWcNmOTbKdvfqkKpgHv_bjcrMuMD7k",
  authDomain: "kern-crud.firebaseapp.com",
  projectId: "kern-crud",
  storageBucket: "kern-crud.appspot.com",
  messagingSenderId: "79429363355",
  appId: "1:79429363355:web:03116bdcf867b50f77c83e",
  measurementId: "G-SBB45Y6PQR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const userList = docs.docs.map((doc) => doc.data());
    await store.dispatch({
      type: AUTH.SET_USER_AUTH_INFO,
      payload: userList[0],
    });
    return true
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (data: object, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      ...data,
      uid: user.uid,
      authProvider: "local"
    });
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const userList = docs.docs.map((doc) => doc.data());
    await store.dispatch({
      type: AUTH.SET_USER_AUTH_INFO,
      payload: userList[0],
    });
    return  true;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const updateUserProfile = async (item: any) => {
  let callState = false
  const state = store.getState();
  const { login: { user } } = state;
  const userData: any = user
  const q = query(collection(db, "users"), where("uid", "==", userData.uid));
  const docs = await getDocs(q);
  const docId = docs.docs.map((doc) => doc.id)[0];
  const docRef = await doc(db, "users", `${docId}`);
  await updateDoc(docRef, item)
    .then(async() => {
      const userId = auth.currentUser?.uid
      const q = query(collection(db, "users"), where("uid", "==", userId));
      const docs = await getDocs(q);
      const newUser = docs.docs.map((doc) => doc.data());
      await store.dispatch({
        type: AUTH.SET_USER_AUTH_INFO,
        payload: newUser[0],
      });
      callState = true
    })
    .catch(err => {
      console.error('Error: ', err)
      callState = false
    })

  return callState
}

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  updateUserProfile,
};
