import * as styles from './Home.css'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import TaAuthCard from '../../components/auth/TaAuthCard'

import Logo from '../../assets/FULL_LOGO.png'
import SmallBend from '../../assets/small_bend.png'
import BigSquiggle from '../../assets/big_squiggle.png'
import TaCard from '../../components/common/TaCard'

function Home() {
  const { user } = useAuth()

  return (
    <div>

      {/* User signed in? show this; */}
      {user ? (
        <div className={styles.loggedInSection}>
          <div className={styles.BannerContainer}>
            <div>
              <p className='m-2'>We thank you for signing up with us, but unfortunately we are not fully operational as of yet!</p>
              <p>If you would like to edit your profile more, please <Link to={`/profile/edit/${user.id}`}>click here</Link></p>
            </div>
          </div>

          <div className={`${styles.InfoBlocks}`}>
            <div className={styles.InfoBlock}>
              <TaCard smallCard className={styles.InfoBlock}>
                <p className={styles.DataNumber}>69</p>
                <span className={styles.InfoText}>Active Users</span>
              </TaCard>
            </div>

            <div className={styles.InfoBlock}>
              <TaCard smallCard>
                <p className={styles.DataNumber}>69</p>
                <span className={styles.InfoText}>More Data</span>
              </TaCard>
            </div>
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