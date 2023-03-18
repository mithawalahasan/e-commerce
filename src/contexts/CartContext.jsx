import React, { createContext, useEffect, useState } from "react";
export const cartcontext = createContext();
const CartContext = ({ children }) => {
  const [cart, setcart] = useState([]);
  // item amount state
  const [ItemAmount, setItemAmount] = useState(0);
  const [total, settotal] = useState(0);
  useEffect(() => {
    const amount = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);
  useEffect(() => {
    const total = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0);
    settotal(total);
  });
  const addtocart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newcart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount + 1 };
        } else {
          return item;
        }
      });
      setcart(newcart);
    } else {
      setcart([...cart, newItem]);
    }
  };
  const removefromcart = (id) => {
    const newcart = cart.filter((item) => {
      return item.id !== id;
    });
    setcart(newcart);
  };
  // clear cart
  const clearcart = () => {
    setcart([]);
  };
  // increase amount
  const increaseamount = (id) => {
    const item = cart.find((item) => item.id === id);
    addtocart(item, id);
  };
  const decreaseamount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      const newcart = cart.map((hey) => {
        if (hey.id === id) {
          return { ...hey, amount: item.amount - 1 };
        } else {
          return hey;
        }
      });
      setcart(newcart);
    }
    if (item.amount < 2) {
      removefromcart(id);
    }
  };
  return (
    <cartcontext.Provider
      value={{
        addtocart,
        cart,
        removefromcart,
        clearcart,
        increaseamount,
        decreaseamount,
        ItemAmount,
        total,
      }}
    >
      {children}
    </cartcontext.Provider>
  );
};

export default CartContext;
