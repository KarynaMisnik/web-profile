import React from 'react'
import './Showcase.scss'
import Coder from '../../assets/img/coder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Showcase = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        <div className="game">
          <div className="front">
            <img src={Coder} alt="" />
            <div className="project-name__container">
              <h2>Card Name</h2>
              <div className="project-links">
                <a href="https://fontawesome.com/search?q=link&o=r">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="card-info">
              This is a web site rthetyrywywy bywywyw5yy rtw5yw5yw5y lorem ipsum
              dolor sit amet lorem ipsum lore
            </div>
          </div>
          <div className="card-bg"></div>
        </div>

        <div className="game">
          <div className="front">
            <img src={Coder} alt="" />
            <div className="project-name__container">
              <h2>Card Name</h2>
              <div className="project-links">
                <a>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="card-info">
              This is a web site rthetyrywywy bywywyw5yy rtw5yw5yw5y lorem ipsum
              dolor sit amet lorem ipsum lore
            </div>
          </div>
          <div className="card-bg"></div>
        </div>
        <div className="game">
          <div className="front">
            <img src={Coder} alt="" />
            <div className="project-name__container">
              <h2>Card Name</h2>
              <div className="project-links">
                <a>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="card-info">
              This is a web site rthetyrywywy bywywyw5yy rtw5yw5yw5y lorem ipsum
              dolor sit amet lorem ipsum lore
            </div>
          </div>
          <div className="card-bg"></div>
        </div>
        <div className="game">
          <div className="front">
            <img src={Coder} alt="" />
            <div className="project-name__container">
              <h2>Card Name</h2>
              <div className="project-links">
                <a>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="card-info">
              This is a web site rthetyrywywy bywywyw5yy rtw5yw5yw5y lorem ipsum
              dolor sit amet lorem ipsum lore
            </div>
          </div>
          <div className="card-bg"></div>
        </div>
        <div className="game">
          <div className="front">
            <img src={Coder} alt="" />
            <div className="project-name__container">
              <h2>Card Name</h2>
              <div className="project-links">
                <a>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="card-info">
              This is a web site rthetyrywywy bywywyw5yy rtw5yw5yw5y lorem ipsum
              dolor sit amet lorem ipsum lore
            </div>
          </div>
          <div className="card-bg"></div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
