import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDxU-XsLssshQTbQFrBseB7KaEiDmhVhuk",
  authDomain: "movie-app-5284b.firebaseapp.com",
  projectId: "movie-app-5284b",
  storageBucket: "movie-app-5284b.appspot.com",
  messagingSenderId: "233849661111",
  appId: "1:233849661111:web:26993405f83f5c8fdc4f32",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//---------------------------------------------------
//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.displayName);
      console.log(result.user.email);
      console.log(result.user.photoURL);
      localStorage.setItem("keyName", result.user.displayName);
      localStorage.setItem("keyEMail", result.user.email);
      localStorage.setItem("keyPhoto", result.user.photoURL);
    })
    .catch((error) => {
      console.log(error);
    });
};
