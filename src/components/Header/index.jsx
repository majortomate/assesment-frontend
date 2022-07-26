import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <header>
      <h1> Mr.Shop </h1>
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
}

export default Header;
