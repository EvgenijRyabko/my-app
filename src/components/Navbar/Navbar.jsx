import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Navbar.module.css';

function Navbar({ navigation }) {
  return (
    <nav className={Classes.nav}>
      <ul>
        {navigation.map((el, i) => (
          <li key={i}>
            <NavLink to={el.to}>{el.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
