import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
// import ToastNotification from "../components/ToastNotification";
import products from "../data/products.json";

const HomePage = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("");

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <div className="home-page">
      <FilterBar onFilterChange={setFilter} />
      <div className="product-grid">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
