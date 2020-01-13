import React from "react";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <a href="/profile"> Contact us </a>
      </div>
      <div className={c.item}>
        <a href="/dialogs"> Telephone </a>
      </div>
      <div className={c.item}>
        <a href="/profile"> FAQ </a>
      </div>
    </nav>
  );
};

export default Navbar;
