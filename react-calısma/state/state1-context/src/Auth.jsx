import { useContext } from "react";
import AuthContext from "./context/auth-context";

const Auth = () => {
  const { status, login } = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      {/* <h1>giriş yaptın mı</h1>
      {status ? <p>ohooo çoktan</p> : <p>hayır</p>}
      <button onClick={login}>giriş yap</button> */}
    </div>
  );
};

export default Auth;
