import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
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
        <label htmlFor="name">Name</label>
        <input type="name" id="name" name="name" value={data.name} />
      </form>
    </div>
  );
};

export default Signup;
