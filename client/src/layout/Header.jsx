import * as styles from './Header.css'

import useAuth from "../hooks/useAuth"

import Logo from '../assets/FULL_LOGO.png'


function Header() {

  const { user } = useAuth()

  // IF there is a user, show navbar, else show nothing
  if(user){
    return (
      <div className={styles.Header}>
        <div className={styles.Nav}>
          <ul>
            <li className={styles.NavItem}>Home</li>
            <li className={styles.NavItem}>Profile</li>
            <li className={styles.NavItem}>Logout</li>
          </ul>
        </div>
        <div className={styles.LogoDiv}>
          <img className={styles.Logo} src={Logo} alt="thoughtz"/>
        </div>
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