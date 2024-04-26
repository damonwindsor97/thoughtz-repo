import { Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

import SideHeader from './SideHeader'
import Footer from './Footer'
import * as styles from './Layout.css'

function Layout() {

  const { user } = useAuth();

  return (
    <div className={styles.app}>
    {user ? (
        <div className={`${styles.appContent} ${styles.appContentSignedIn}`}>
            <SideHeader />
            <Outlet />
        </div>
    ) : (
        <div className={styles.appContent}>
            <Outlet />
        </div>
    )}
    <Footer />
</div>
  )
}

export default Layout