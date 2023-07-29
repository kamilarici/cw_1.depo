import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
