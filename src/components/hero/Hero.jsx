import React from 'react'
import './Hero.css'
import myImage from '../../assets/img/color-image.png'

const Hero = () => {
  return (
    <section id="about" className="welcome-section">
      <div className="img-container">
        <img src={myImage} alt="Profile Photo of Karyna Misnik" />
      </div>
      <div className="about-container">
        <h1>
          Hello, I am <span>Karyna</span>
        </h1>
        <p className="about-me">
          I am an Associate Degree holder in Software Development with a fervor
          for transforming ideas into dynamic digital solutions. Ready to
          contribute, eager to learn, and passionate about the journey—I am not
          just a developer; I am a growing force in the world of software
          creation.
        </p>
      </div>
    </section>
  )
}

export default Hero
