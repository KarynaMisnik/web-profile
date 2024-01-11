import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer id="socials">
      <div className="social-media-icons-container">
        <a>
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <p className="footer-logo">
        Karyna<span>.</span>
      </p>
    </footer>
  )
}

export default Footer
