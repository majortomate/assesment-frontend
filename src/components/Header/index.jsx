import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <header>
    <Link to="/" className="logo">Mr. Shop</Link>
    <ul className="header-container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
);

export default Header;
