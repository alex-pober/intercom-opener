import React from "react";
import './navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FastEntry</h1>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/contact">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
