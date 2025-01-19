import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
};

export default CartPage;
