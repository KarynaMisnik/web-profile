import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const hideItems = isMenuOpen ? '' : 'hidden'

  return (
    <div id="navbar" className="nav">
      <div className="menu-icon" onClick={handleToggleMenu}>
        ☰
      </div>

      <ul className={`nav-list ${hideItems}`}>
        <li className="logo">
          <a href="#welcome-section">
            Karyna<span>.</span>
          </a>
        </li>
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#skills">Stack</a>
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
