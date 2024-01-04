import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id="navbar" className="nav">
      <ul className="nav-list">
        <li className="logo">
          <a href="#welcome-section">
            Karyna<span>.</span>
          </a>
        </li>
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
