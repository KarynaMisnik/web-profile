import React from 'react'
import './Skillbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { Tooltip } from '@mui/material'

const Skillbox = () => {
  return (
    <section id="contact" className="skills-section">
      <div className="skills-section-header">
        <h2>
          My <span>skillbox</span>
        </h2>
      </div>
      <div className="skillbox">
        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>Figma</p>}
        >
          <button className="skillbox-item item-1">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faFigma} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>HTML5</p>}
        >
          <button className="skillbox-item item-5">
            <a href="#">
              <i className="fas fa-mobile-alt"></i>{' '}
              <FontAwesomeIcon icon={faHtml5} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>CSS3</p>}
        >
          <button className="skillbox-item item-6">
            <a href="#">
              <i className="fas fa-mobile-alt"></i>{' '}
              <FontAwesomeIcon icon={faCss3} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>React</p>}
        >
          <button className="skillbox-item item-7">
            <a href="#">
              <i className="fas fa-mobile-alt"></i>{' '}
              <FontAwesomeIcon icon={faReact} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>Java</p>}
        >
          <button className="skillbox-item item-2">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faJava} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>PHP</p>}
        >
          <button className="skillbox-item item-3">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faPhp} />
            </a>
          </button>
        </Tooltip>

        <Tooltip
          title={<p style={{ bgcolor: '#999', fontSize: '2.5rem' }}>SQL</p>}
        >
          <button className="skillbox-item item-4">
            <a href="#">
              <FontAwesomeIcon icon={faDatabase} />
            </a>
          </button>
        </Tooltip>
      </div>
    </section>
  )
}

export default Skillbox
