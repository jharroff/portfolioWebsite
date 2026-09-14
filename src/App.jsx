import { useState } from 'react'
import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Resume from './pages/resume/Resume'
import {Routes, Route, Navigate} from 'react-router-dom'
import "./globalStyles.css"

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default App
