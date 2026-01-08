import { useState } from 'react'
import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<About />} />
      <Route exect path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
