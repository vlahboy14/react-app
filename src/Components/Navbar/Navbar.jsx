import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  let names = props.namesData.friends
    .map(friendName =>
      <div className={style.friendWrapper}>
        <div className={style.friendAvatar}>
          <img src="https://via.placeholder.com/50x50" alt='' />
        </div>
        <div className={style.text}>{friendName.name}</div>
      </div>
    );

  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}> Profile </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}> Messages </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}> News </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}> Music </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}> Settings </NavLink>
      </div>
      <div className={style.item}>
        <div className={style.friendsLink}>
          <NavLink to="/friends" activeClassName={style.active}> Friends </NavLink>
        </div>
        <div className={style.friendsContainer} >
          {names}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
