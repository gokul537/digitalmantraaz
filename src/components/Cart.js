import React from "react";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items in the cart.</p>}
      <ul>
        {cartItems?.map((item, index) => (
          <li key={index}>
            <span>
              {item?.name} - <strong>${item?.price.toFixed(2)}</strong>
            </span>
            <button onClick={() => onRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  );
};

export default Cart;
