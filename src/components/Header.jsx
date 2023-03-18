import React, { useContext, useEffect, useState } from "react";
import { Sidebarcontext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { cartcontext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
const Header = () => {
  const { isopen, setisopen } = useContext(Sidebarcontext);
  const { ItemAmount } = useContext(cartcontext);
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-[40px]" src={Logo} alt="Image" />
          </div>
        </Link>
        <div
          onClick={() => setisopen(!isopen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {ItemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
