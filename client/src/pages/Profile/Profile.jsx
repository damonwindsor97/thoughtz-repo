import * as styles from './Profile.css'
import axios from 'axios'

import TaCard from "../../components/common/TaCard"
import TaProfileCard from '../../components/common/TaProfileCard'

function Profile() {








  return (
    <div className={styles.profilePage}>

        <div className={styles.profileContainer}>
            {/* Cover Photo */}
            <div>
                <img className={styles.coverPicture} src="https://images.unsplash.com/photo-1553570739-330b8db8a925?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className={styles.cardContainer}>
                <TaProfileCard title="">
                    <img className={styles.profilePicture} src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p className={styles.username}>@Swegnesium</p>
                    <p className={styles.fullname}>Damon Windsor</p>
                    <div className={styles.profileDetails}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et recusandae fugit consectetur alias voluptate possimus. Recusandae laudantium error porro.</p>
                    </div>
                    <div className={styles.profileContent}>

                    </div>
                </TaProfileCard>
            </div>
        </div>

        {/* ------- POSTS -------- */}
        <div>
            <TaCard title="Posts" largeCard>
                <p>There are currently no posts...</p>
            </TaCard>
        </div>

    </div>
  )
}

export default Profile