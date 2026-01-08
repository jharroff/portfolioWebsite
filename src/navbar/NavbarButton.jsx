import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function NavbarButton({pageTitle, link}) {

  return (
    <li>
        <div className='navbarContainerDiv'>
            <NavLink
              to={link}>
                {({isActive}) => (
                  <>
                    <p className={'navbarButtonText ' + (isActive ? "activePage" : "")}>
                      {pageTitle}
                    </p>
                    <div className={(isActive ? "activeUnderlineDiv" : "underlineDiv")}></div>
                  </>
                )}
            </NavLink>
        </div>
    </li>
  )
}

export default NavbarButton
