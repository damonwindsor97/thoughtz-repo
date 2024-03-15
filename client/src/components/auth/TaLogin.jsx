import * as styles from './TaLogin.css'

import { Link } from 'react-router-dom'

import TaButton from '../../components/common/TaButton'
import ClerkImage from '../../assets/clerk-logo.png'


function TaLogin() {
  return (
    <div className={styles.LoginCard}>
      <div className={styles.CardContent}>
        <div className={styles.CardInputs}>
          <input type="email" placeholder='Email Address' className={styles.LoginInputField}></input>
          <input type="password" placeholder='Password' className={styles.LoginInputField}></input>
        </div>

        <div className={styles.CardFooter}>
          <TaButton content="Log In"/>

          <div className={styles.AltSignIn}>
            <Link>Or Sign-In via Clerk <img src={ClerkImage} className={styles.ClerkLogo}/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaLogin