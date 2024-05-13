import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { menu } from "../Data";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const handleDrawerClick = (event) => {
    if (event.target.closest(".drawer-content")) {
      closeDrawer();
    }
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      closeDrawer();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        className={`text-2xl text-white block mb-1 hover:text-yellow-400 absolute top-4 left-4 z-20 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Button with times icon to close the drawer */}
      <button
        onClick={closeDrawer}
        className={`text-white block mb-1 hover:text-yellow-400 absolute top-4 left-4 z-20 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* Overlay to capture click events and close the drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={handleOutsideClick}
        ></div>
      )}

      {/* Drawer component */}
      <Drawer
        open={isOpen} // Use isOpen state to control drawer open state
        direction="left"
        style={{ background: "#141937" }}
        className="z-20" // Set a higher z-index for the drawer to ensure it covers the overlay
      >
        <div className="p-6 drawer-content" onClick={handleDrawerClick}>
          {menu.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="text-white font-bold text-lg mb-3">
                {category.title.toUpperCase()}
              </div>
              {category.listItems.map((item) => (
                <Link
                  to={item.url}
                  className="text-white block mb-1 hover:text-yellow-400"
                  key={item.id}
                  onClick={closeDrawer} // Close the drawer when a link is clicked
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
