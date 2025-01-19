import React from "react";
import { motion } from "framer-motion";
import ToastNotification from "./ToastNotification";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-grid">
  {/* {product.map((product, index) => ( */}
    <motion.div
      // key={index}
      className="product-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={product?.image}
        alt={product?.name}
        className="product-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{width:"100%"}}
      />
      <h3>{product?.name}</h3>
      <p>Rs {product?.price}</p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => onAddToCart(product)}
        style={{padding:"10px 10px 10px 10px",outline:"none",border:"none",backgroundColor:"#3e650d",color:"#fff"}}
      >
        Add to Cart
        {/* <ToastNotification/> */}
      </motion.button>
    </motion.div>
  {/* // ))} */}
</div>

  
  );
};

export default ProductCard;
