import React, { createContext } from "react";
import { useState } from "react";

export const FirebaseContext = createContext();

const FireBaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <FirebaseContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FireBaseProvider;
