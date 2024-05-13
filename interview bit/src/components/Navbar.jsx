import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar  text-white py-4 px-6 flex justify-between items-center">
      <div className="logo flex items-center font-bold gap-2 ml-10">
        <img src="logo.svg" alt="" />
        <span className="text-2xl">AmatShop</span>
      </div>
      <div className="icons flex items-center gap-6">
        <FontAwesomeIcon icon={faSearch} className="icon hidden sm:block" />
        <FontAwesomeIcon icon={faTwitter} className="icon hidden sm:block" />
        <FontAwesomeIcon icon={faBell} className="icon hidden sm:block" />
        <div className="notification relative">
          <FontAwesomeIcon icon={faBell} />
          <span className="bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-[-10px] right-0">
            1
          </span>
        </div>
        <div className="user flex items-center gap-2">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Love Sharma</span>
        </div>
        <FontAwesomeIcon icon={faCog} className="icon hidden sm:block" />
      </div>
    </div>
  );
};

export default Navbar;
