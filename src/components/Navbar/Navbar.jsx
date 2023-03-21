import React from "react";
import Classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = ({sidebar}) => {
  return (
    <nav className={Classes.nav}>
      <ul>
        {
          sidebar.navigation.map((el, i) => {
            return (
              <li key={ i }>
                <NavLink to={ el.to }>{ el.text }</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;
