import { Link } from 'react-router-dom';
function NavbarButton({pageTitle, link}) {

  return (
    <li>
        <div className='navbarContainerDiv'>
            <Link to={link}>
                <p className="navbarButtonText">
                    {pageTitle}
                </p>
            </Link>
            <div className="underlineDiv"></div>
        </div>
    </li>
  )
}

export default NavbarButton
