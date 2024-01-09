import React from 'react'
import './Showcase.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import showcaseData from './showcaseData'

const Showcase = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        {showcaseData.map((project, index) => (
          <div key={index} className="game">
            <div className="front">
              <img
                src={project.img}
                alt={project.alt}
                onLoad={() => console.log('Image loaded successfully')}
                onError={() => console.error('Error loading image')}
              />
              <div className="project-name-container">
                <h2>{project.name}</h2>
                <div className="project-links">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="card-info">{project.description}</div>
            </div>
            <div className="card-bg"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Showcase
