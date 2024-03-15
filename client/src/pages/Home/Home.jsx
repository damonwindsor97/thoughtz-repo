import * as styles from './Home.css'
import TaAuthCard from '../../components/auth/TaAuthCard'

import Logo from '../../assets/FULL_LOGO.png'

import SmallBend from '../../assets/small_bend.png'
import BigSquiggle from '../../assets/big_squiggle.png'

function Home() {
  return (
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
  )
}

export default Home