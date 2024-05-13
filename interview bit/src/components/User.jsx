import React from "react";
import Single from "./singleuser";
import { singleUser } from "../Data";

const User = () => {
  // Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
