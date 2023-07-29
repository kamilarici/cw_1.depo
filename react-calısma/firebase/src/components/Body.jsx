import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { signInWithGoogle } from "./signInWithGoogle";

const Body = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      {/* <div>
        <SignUp />
      </div>

      <div>
        <SignIn />
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <LogOut /> */}
      <button onClick={signInWithGoogle}>google</button>
      {/* <signInWithGoogle /> */}
    </div>
  );
};

export default Body;
