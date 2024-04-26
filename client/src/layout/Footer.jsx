import * as styles from './Footer.css'

import Logo from '../assets/FULL_LOGO.png'

function Footer() {
  return (
    <div className={styles.Footer}>

      <div className={styles.Nav}>
        <p className={styles.NavItem}>Terms of Service</p>
        <p className={styles.NavItem}>Privacy Policy</p>
        <p className={styles.NavItem}>Support</p>
      </div>
    </div>
  )
}

export default Footer