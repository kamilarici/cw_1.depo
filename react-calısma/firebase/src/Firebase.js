import { signInWithGoogle } from "../FireBase";
const SignInUsingGoogle = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In using Google</button>
      <h1>{localStorage.getItem("keyName")}</h1>
      <h1>{localStorage.getItem("keyEMail")}</h1>
      <img src={localStorage.getItem("keyPhoto")} />
    </div>
  );
};
export default SignInUsingGoogle;
