import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { cartcontext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removefromcart, increaseamount, decreaseamount } =
    useContext(cartcontext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="image" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex  justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer ">
              <IoMdClose
                onClick={() => removefromcart(id)}
                className="text-gray-500 hover:text-red-500  transition"
              />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                className="flex-1  flex justify-center items-center cursor-pointer"
                onClick={() => decreaseamount(id)}
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseamount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                {/* plus icon */}
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final price */}
            {/* make price at 2 decimals */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium">
              {`$ ${(price * amount).toFixed(2)}`}

              {/* {(price * amount).toFixed(2)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
