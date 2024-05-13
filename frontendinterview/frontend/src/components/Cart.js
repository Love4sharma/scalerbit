import React, { useState } from "react";
import axios from "axios";
const Cart = () => {
  const [products, setProducts] = useState([]);
  async function getproducts() {
    try {
      const res = await axios.get("http://localhost:8080");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageurl} alt="" className="songimage" />
          <span>{product.name}</span>
          <span>{product.description}</span>
          <span>{product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
