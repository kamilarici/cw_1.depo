import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../FirebaseConfig'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



export const FirebaseContext = createContext()


const FireBaseProvider = ({ children }) => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    userObserver()
  }, [])

  const createUser = async (email, password, displayName) => {

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      await updateProfile(auth.currentUser, {
        displayName: displayName
      });

      setCurrentUser(userCredential.user.displayName)

    } catch (error) {
      console.log(error.message);
    }

  }

  const LoginUser = async (email, password) => {

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      alert("sen kimsen la?? Hadi bir kayit ol gel")
      navigate("/register")
    }

  }

  const logOut = () => {
    signOut(auth)
  }

  const userObserver = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL } = user

        setCurrentUser({ displayName, photoURL })
      } else {

      }
    });

  }

  const LoginGoogle = async () => {

    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider)
      navigate('/')

    } catch (error) {
      console.log(error);
    }

  }


  const values = { LoginGoogle, currentUser, setCurrentUser, createUser, LoginUser, logOut }

  return (
    <FirebaseContext.Provider value={values}>{children}</FirebaseContext.Provider>
  )
}

export default FireBaseProvider