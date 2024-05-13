// import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [userLogin, setuserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  async function getproducts() {
    try {
      const res = await axios.get("http://localhost:8085/getProducts");
      // Assuming your response contains an array of products, setProducts with that array
      // setProducts(res.data); // Use res.data to access the response data
      console.log("Products fetched:", res); // Log the fetched products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          width: "100vw",
          flex: "0.2",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "2.2em",
          padding: "0.5rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div>
          <span>Shopping</span>
        </div>
        <div>
          <input
            type="Search"
            style={{
              width: "150%",
              height: "30px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          />
        </div>
        <div>
          <FaShoppingCart />
          <sup style={{ fontSize: "0.9em", color: "green", cursor: "pointer" }}>
            0
          </sup>
        </div>
        <div>
          {userLogin === true ? (
            <Link to="/logout</div>" style={{ textDecoration: "none" }}>
              Log Out
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          )}
        </div>
      </div>

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
    </div>
  );
};

export default Home;
