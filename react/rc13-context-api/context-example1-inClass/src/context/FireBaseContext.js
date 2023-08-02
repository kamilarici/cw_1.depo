import React, { createContext } from "react";

const FirebaseContext = createContext();

const FireBaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={null}>{children}</FirebaseContext.Provider>
  );
};

export default FireBaseProvider;
