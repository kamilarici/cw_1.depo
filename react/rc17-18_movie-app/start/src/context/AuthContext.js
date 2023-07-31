import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

//* with custom hook
// export const useAuthCotext =() => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = { createUser, signIn };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
