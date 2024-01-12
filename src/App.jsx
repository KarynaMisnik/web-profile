import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import CV from './components/resume/CV'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cv" element={<CV />} />
      </Routes>
    </>
  )
}

export default App
