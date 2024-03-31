import * as styles from './Profile.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import authService from '../../services/authService'

import MoonLoader from 'react-spinners/MoonLoader'

import TaCard from "../../components/common/TaCard"
import TaProfileCard from '../../components/common/TaProfileCard'

function Profile() {

    const params = useParams();

    const [userData, setUserData] = useState({
        id: params.id,
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        bio: "",
        profile_image: "",
        cover_image: "",
        isAdmin: false
    });

    const { id, username, first_name, last_name, bio, profile_image, cover_image } = userData;

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    const effectRan = useRef(false);
    useEffect(() => {
        if(effectRan.current === false){
            fetchUser();
            setLoading(false)

            // prevents double call of useEffect
            return () => {
                effectRan.current = true;
            }
        }
    }, [])

    async function fetchUser(){
        try {
            const response = await authService.getById(id)
            const fetchedUser = await response.data
            console.log(fetchedUser)

            // Updates state value
            setUserData(userOnMount => ({
                ...userOnMount,
                ...fetchedUser
            }));
        } catch (error) {
            console.log(error.response)
            setError(true)
        }
    }
    
    if (error) {
        return (
          <div className='text-center mt-5'>
            <p>Error loading page...</p>
    
          </div>
        )
      }
    
      // CONDITIONAL LOAD: LLOADING
      if (loading && effectRan.current === true) {
        return (
        <div className={styles.profilePage}>
            <div className={styles.profileContainer}>
                {/* Cover Photo */}
                <div>
                </div>
                <div className={styles.cardContainer}>
                    <TaProfileCard title="">
                        <MoonLoader/>
                    </TaProfileCard>
                </div>
            </div>
        </div>
        )
      }


  return (
    <div className={styles.profilePage}>

        <div className={styles.profileContainer}>
            {/* Cover Photo */}
            <div>
                <img className={styles.coverPicture} src="https://images.unsplash.com/photo-1553570739-330b8db8a925?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className={styles.cardContainer}>
                <TaProfileCard title="">
                    <img className={styles.profilePicture} src={profile_image}/>
                    <p className={styles.username}>@{username}</p>
                    <p className={styles.fullname}>{first_name} {last_name}</p>
                    <div className={styles.profileDetails}>
                        <p>{bio}</p>
                    </div>
                </TaProfileCard>
            </div>
        </div>

        {/* ------- POSTS -------- */}
        <div className='mb-5'>
            <TaCard title="Posts" largeCard>
                <p>There are currently no posts...</p>
            </TaCard>
        </div>

    </div>
  )
}

export default Profile