import React from "react";
import Classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
