import NavbarButton from './NavbarButton'
import './Navbar.css'

function Navbar() {

  return (
    <div className="navbarDiv">
      <ul>
        <NavbarButton pageTitle={"Home"} link={"/"} />
        <NavbarButton pageTitle={"About"} link={"/about"} />
        <NavbarButton pageTitle={"Projects"} link={"/projects"} />
      </ul>
    </div>
  )
}

export default Navbar
