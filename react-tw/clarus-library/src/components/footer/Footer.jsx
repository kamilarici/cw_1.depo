import React, { useContext } from "react";
import FooterStyle from "./Footer.style";
import AuthContext from "../../context/AuthContext";

const Footer = () => {
  const { dark, setDark } = useContext(AuthContext);
  return (
    <FooterStyle>
      {dark ? (
        <i class="fa-regular fa-sun" onClick={() => setDark(!dark)}></i>
      ) : (
        <i class="fa-solid fa-moon" onClick={() => setDark(!dark)}></i>
      )}
    </FooterStyle>
  );
};

export default Footer;
