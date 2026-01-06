import { useState } from 'react'
import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
