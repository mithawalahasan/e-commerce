import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { Sidebarcontext } from "../contexts/SidebarContext";
import { cartcontext } from "../contexts/CartContext";
import "../output.css";
const Sidebar = () => {
  const { isopen, handleclose } = useContext(Sidebarcontext);
  const { cart, clearcart, total, ItemAmount } = useContext(cartcontext);

  return (
    <div
      className={`${
        isopen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full
      shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px] no-scrollbar overflow-y-auto`}
    >
      <div className="flex items-center justify-between py-6">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({ItemAmount})
        </div>
        <div
          onClick={handleclose}
          className="cursor:pointer w-8 h-8 flex justify-center items-center "
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px]  border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total</span>$ {total.toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearcart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
