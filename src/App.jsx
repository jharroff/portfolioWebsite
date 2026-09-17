import { useState } from 'react'
import Homepage from './pages/homepage/Homepage'
import Navbar from './navbar/Navbar.jsx'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Resume from './pages/resume/Resume'
import {Routes, Route, Navigate} from 'react-router-dom'
import "./globalStyles.css"

import { useCallback, useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim';

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

function App() {

  const particlesLoaded = useCallback(async (container) => {
    await console.log("Particles conainter loaded", container);
  }, []);

  const options = useMemo(() => ({
      fpsLimit: 120,
      fullScreen: { enable: true, zIndex: -5 },
      particles: {
        number: { value: 80 },
        color: { value: "#00d4ff" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: { min: 2, max: 5 } },
        move: {
          enable: true,
          speed: 0.35,
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#0F577E",
          opacity: 1,
          width: 2,
        },
      },
      background: { color: "#0d1117" },
    }),
    [],
  );
  return (
    <>
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </ParticlesProvider>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
    </>
  )
}

export default App
