import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
/* Mui Tooltip */
import { Tooltip } from '@mui/material'

const Footer = () => {
  return (
    <footer id="socials">
      <div className="social-media-icons-container">
        <a href="https://github.com/KarynaMisnik">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a href="https://www.linkedin.com/in/karyna-misnik/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <Tooltip
          title={
            <p
              style={{
                fontSize: '2rem',
              }}
            >
              CV
            </p>
          }
        >
          <Link to="./cv">
            <button className="cv-icon">
              <FontAwesomeIcon icon={faFile} />
            </button>
          </Link>
        </Tooltip>
      </div>
      <h2 className="footer-logo">
        Karyna<span>.</span>
      </h2>
    </footer>
  )
}

export default Footer
