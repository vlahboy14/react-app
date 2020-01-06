import React from "react";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className={c.item}> Contact us </div>
        <div className={c.item}> Telephone </div>
        <div className={c.item}> FAQ </div>
      </div>
    </div>
  );
};

export default Navbar;
