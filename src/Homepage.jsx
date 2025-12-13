import { useState } from 'react'
import './Homepage.css'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="titleDiv">
        <h1>BigWing's Portfolio Website</h1>
      </div>
      <h2>Projects</h2>
    </>
  )
}

export default Homepage
