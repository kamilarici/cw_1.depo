import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import { SidebarContext } from "../contexts/SidebarContext";
import CardItem from "./CarrdItem";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white  fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      SİDEBAR
    </div>
  );
};

export default Sidebar;
