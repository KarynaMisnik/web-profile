import React from 'react'
import './index.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Showcase from './components/showcase/Showcase'
import Footer from './components/footer/Footer'
import Skillbox from './components/skillbox/Skillbox'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skillbox />
      <Showcase />
      <Footer />
    </>
  )
}

export default App
