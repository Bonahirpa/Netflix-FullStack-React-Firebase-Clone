import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCsxWCTCb-MPyaE4MH0JtdKJ4IHZVy0bNI",
  authDomain: "netflix-clone-17cdf.firebaseapp.com",
  projectId: "netflix-clone-17cdf",
  storageBucket: "netflix-clone-17cdf.firebasestorage.app",
  messagingSenderId: "673172964325",
  appId: "1:673172964325:web:6642bbd8d206917894e50c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res= await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); 
    toast.success("Login successful!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
  toast.success("Logged Out successful!");
}

export {auth, db, login, signup, logout}