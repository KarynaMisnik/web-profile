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

const skills = [
  { name: 'Figma', icon: faFigma, className: 'item-1' },
  { name: 'HTML5', icon: faHtml5, className: 'item-5' },
  { name: 'CSS3', icon: faCss3, className: 'item-6' },
  { name: 'ReactJS', icon: faReact, className: 'item-7' },
  { name: 'PHP', icon: faPhp, className: 'item-3' },
  { name: 'SQL', icon: faDatabase, className: 'item-4' },
]

const Skillbox = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section-header">
        <h2>
          My <span>skillbox</span>
        </h2>
      </div>
      <div className="skillbox">
        {skills.map((skill, index) => (
          <Tooltip
            key={index}
            title={
              <p style={{ bgcolor: 'var(--bg-tooltip)', fontSize: '2rem' }}>
                {skill.name}
              </p>
            }
          >
            <button className={`skillbox-item ${skill.className}`}>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={skill.icon} />
              </a>
            </button>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default Skillbox
