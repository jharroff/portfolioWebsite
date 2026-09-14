import NavbarButton from './NavbarButton'
import './Navbar.css'

function Navbar() {

  return (
    <div className="navbarDiv">
      <ul>
        <NavbarButton pageTitle={"Home"} link={"/"} />
        <NavbarButton pageTitle={"Projects"} link={"/projects"} />
        <NavbarButton pageTitle={"Resume"} link={"/resume"} />
      </ul>
    </div>
  )
}

export default Navbar
