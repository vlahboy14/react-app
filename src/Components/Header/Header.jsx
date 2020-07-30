import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo} >
        <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt='' />
      </div>
    </header>
  );
};

export default Header;