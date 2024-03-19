import { Outlet } from 'react-router-dom'



import Header from './Header'
import Footer from './Footer'
import * as styles from './Layout.css'

function Layout() {
  return (
    <div className={styles.app}>
        <Header/>
            <div className={styles.appContent}>
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}

export default Layout