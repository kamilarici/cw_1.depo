import React, { createContext } from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";
export const FirebaseContext = createContext();

const FireBaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  //? *****createuser******
  const createUser = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });

    console.log(userCredential);
  };
  //? *******
  const loginUser = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  };
  // const values ={currentUser, setCurrentUser, createUser,loginUser}
  return (
    <FirebaseContext.Provider
      value={{ currentUser, setCurrentUser, createUser, loginUser }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FireBaseProvider;
