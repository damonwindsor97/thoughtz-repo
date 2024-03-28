import * as styles from './Header.css'

import useAuth from "../hooks/useAuth"
import { Link } from 'react-router-dom'

import Logo from '../assets/FULL_LOGO.png'


function Header() {

  const { user, logoutUser } = useAuth()

  // IF there is a user, show navbar, else show nothing
  if(user){
    return (
      <div className={styles.Header}>
        <div className={styles.Nav}>
          <ul className={styles.NavList}>
            <li className={styles.NavItem}><Link to="/" className={styles.NavLink}>Home</Link></li>
            <li className={styles.NavItem}><Link to="/profile/:id" className={styles.NavLink}>Profile</Link></li>
            <li className={styles.NavItem}><a className={styles.NavLink} onClick={logoutUser}>Logout</a></li>
          </ul>
        </div>
        {/* <div className={styles.LogoDiv}>
          <img className={styles.Logo} src={Logo} alt="thoughtz"/>
        </div> */}
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default Header