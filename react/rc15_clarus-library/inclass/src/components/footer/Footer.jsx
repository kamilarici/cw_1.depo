import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { lightIcon, darkIcon } from "../../helper/iconData";
import { FooterBtn, FooterContainer } from "./Footer.style";

const Footer = () => {
  const { myTheme, setMyTheme } = useThemeContext();

  const handleClick = () => {
    // if(myTheme === "light") {
    //   setMyTheme("dark")
    // }else {
    //   setMyTheme("light")
    // }

    setMyTheme(prev => (prev === "light" ? "dark" : "light"));
    //!statein anlık durumuna göre güncelleme yapacak. kullanıcı tıkladıkça toggle mantığı kurmuş olduk
    //* setter metodu içerisine bir callback function kabul edebiliyor. Bu callback function parametre alan bir function ve bu parametre statein anlık değerini temsil ediyor. Bu parametreye göre ekstra işlemler veya kontroller yapabilirsiniz.
  };

  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>
        {myTheme === "light" ? lightIcon : darkIcon}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
