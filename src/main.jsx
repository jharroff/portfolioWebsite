import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar/Navbar.jsx'
import "./index.css"
import App from './App.jsx'
import { HashRouter, Routes, Route } from "react-router-dom"
import "./globalStyles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
