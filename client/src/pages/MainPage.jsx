import * as styles from './MainPage.css'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

function MainPage() {

  const { user, logoutUser } = useAuth()
  return (
    <div >

      <div className={styles.BannerContainer}>
        <h3 className='mb-4'>Welcome: {user.username}</h3>
        <p className='m-2'>We thank you for signing up with us, but unfortunetely we are not fully operational as of yet!</p>
        <p>If you would like to edit your profile more, please <Link>click here</Link></p>
        <button onClick={logoutUser} className='m-2'>Logout</button>
      </div>

    </div>
  )
}

export default MainPage