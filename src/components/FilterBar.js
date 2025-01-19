import React, { useState } from "react";
import { motion } from "framer-motion";

const FilterBar = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <motion.div
      className="filter-bar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{display:"flex",justifyContent:"center",marginTop:"30px"}}
    >
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        style={{padding:"10px 10px 10px 10px",outline:"none"}}        
        onChange={handleFilter}
      />
    </motion.div>
  );
};

export default FilterBar;
