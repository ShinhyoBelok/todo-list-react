import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <ul>
      <li className="link">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { color: 'red' } : {})}
        >
          Home
        </NavLink>
      </li>
      <li className="link">
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? { color: 'red' } : {})}
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
