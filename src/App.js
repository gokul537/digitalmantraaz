import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "../src/App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
