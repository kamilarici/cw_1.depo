import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {" "}
        <BsBag />
      </div>
    </>
  );
};

export default Header;
