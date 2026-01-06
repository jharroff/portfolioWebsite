import { Link } from 'react-router-dom';
function NavbarButton({pageTitle, link}) {

  return (
    <li>
      <Link to={link}>{pageTitle}</Link>
    </li>
  )
}

export default NavbarButton
