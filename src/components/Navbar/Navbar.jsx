import React from "react";
import Classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import data from '../../data/nav-data.json';

const Navbar = () => {
  return (
    <nav className={Classes.nav}>
      <ul>
        {
          data.map((el, i) => {
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
