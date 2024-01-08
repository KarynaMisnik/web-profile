import React from 'react'
import './Hero.css'

import myImage from '../../assets/img/color-image.png'

const Hero = () => {
  return (
    <section id="welcome-section" class="welcome-section">
      <div className="img-container">
        <img src={myImage} />
      </div>
      <div className="about-container">
        <h1>
          I am <span>Karyna</span>
        </h1>
        <p className="about-me">
          I'm a recent graduate in Software Development with a passion for web
          and mobile development.
        </p>
      </div>
    </section>
  )
}

export default Hero
