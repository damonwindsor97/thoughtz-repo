import * as styles from './Home.css'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import TaAuthCard from '../../components/auth/TaAuthCard'

import Logo from '../../assets/FULL_LOGO.png'
import SmallBend from '../../assets/small_bend.png'
import BigSquiggle from '../../assets/big_squiggle.png'

function Home() {
  const { user, logoutUser } = useAuth()

  return (
    <div>

      {/* User signed in? show this; */}
      {user ? (
        
        <div className={styles.BannerContainer}>
          <div>
            <h3 className='mb-4'>Welcome: {user.username}</h3>
            <p className='m-2'>We thank you for signing up with us, but unfortunately we are not fully operational as of yet!</p>
            <p>If you would like to edit your profile more, please <Link to="/profile">click here</Link></p>

            <button onClick={logoutUser} className='m-2'>Logout</button>
          </div>
        </div>

        // If user is not signed in, show them this;
      ) : (
        <div className={styles.HomeBackground}>
        <img src={SmallBend} className={styles.SmallBend}/>
        <img src={BigSquiggle} className={styles.BigSquiggle}/>
  
        <div className={styles.HomeContent}>
  
          <div className={styles.LogoSection}>
            <img src={Logo} alt="thoughtz" className={styles.Logo}/>
          </div>
  
          <div className={styles.FormSection}>
            <TaAuthCard/>
          </div>
          
        </div>
      </div>
      )}
  </div>

  )
}

export default Home