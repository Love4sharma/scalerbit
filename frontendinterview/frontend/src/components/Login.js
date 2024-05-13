import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function HandleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {}
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={data.email} />
        <br />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
        />
        <br />
        <span>
          Don't have an account
          <Link to="/signup">SignUp</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
