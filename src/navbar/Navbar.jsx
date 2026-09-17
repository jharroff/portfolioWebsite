import NavbarButton from './NavbarButton'
import './Navbar.css'

function Navbar() {

  return (
    <div className="outerNavDiv">
      <div className="navbarDiv">
        <div className="nameDiv">
          <p className={"nameText"}>Joshua Harroff</p>
        </div>
        <div className="navLinksDiv">
          <ul>
            <NavbarButton pageTitle={"Home"} link={"/"} />
            <NavbarButton pageTitle={"Projects"} link={"/projects"} />
            <NavbarButton pageTitle={"Resume"} link={"/resume"} />
          </ul>
        </div>
        <div className="socialLinksDiv">
          <NavbarExternalLink pageIcon={"LinkedIn"} link={"https://www.linkedin.com/in/joshua-harroff/"} />
          <NavbarExternalLink pageIcon={"GitHub"} link={"https://github.com/jharroff"} />
          <NavbarExternalLink pageIcon={"Email"} link={"mailto:joshuaharroff@outlook.com"} />
        </div>
      </div>
    </div>
  )
}

export default Navbar

function NavbarExternalLink({pageIcon, link}) {

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="socialIcon" src={import.meta.env.BASE_URL + `linkIcons/${pageIcon}.png`} alt={pageIcon} />
        <div className={("underlineDiv")}></div>
      </a>
    </>
  )
}
