import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className='nav'>
      <div>
        <h2>
          <Link to="/">React Shop</Link>
        </h2>
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav;