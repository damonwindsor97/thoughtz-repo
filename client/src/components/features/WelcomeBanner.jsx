import * as styles from './WelcomeBanner.css'
import { useAuth } from "../../contexts/AuthContext"


function WelcomeBanner() {

    const { user, logoutUser } = useAuth()

    if(!user){
    <div>
        Cannot Find User, please sign in
    </div>
    }
  return (
    <div className={styles.BannerContainer}>
        <h3>Thank you {user.username} for expressing your interest</h3>
        <p>We thank you for signing up with us, but unfortunetely we are not fully operational as of yet!</p>
        <p>If you would like to edit your profile more, please <a>click here</a></p>
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default WelcomeBanner