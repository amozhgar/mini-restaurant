import { useSelector } from "react-redux";
import CartItem from "../Compenents/CartItem";
import React, { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContex";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const { darkMode } = useContext(DarkModeContext);

  if (quantity === 0) {
    return (
      <div
        className={darkMode ? `h-screen bg-slate-800` : ` h-screen bg-white`}
      >
        <h2 className="my-20 text-3xl font-bold text-rose-600	">
          Ops Sorry, No items in cart...😢
        </h2>
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? `flex flex-col my-2 h-screen bg-slate-800`
          : `flex flex-col my-2 h-screen bg-white`
      }
    >
      <h1 className="font-bold font-mono text-3xl">Cart</h1>
      <div className="flex h-auto flex-col justify-around">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h2 className="font-bold font-mono">
        Total Amount: ${totalAmount.toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;
