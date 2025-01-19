import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ToastNotification from "./components/ToastNotification";
import ProductCard from "./components/ProductCard";  // Import ProductCard component
import "../src/App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null); // State for toast message

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setToast(`Added "${product.name}" to cart!`); // Show the toast notification
    setTimeout(() => setToast(null), 3000); // Hide the toast after 3 seconds
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      {toast && <ToastNotification message={toast} onClose={() => setToast(null)} />}
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

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
