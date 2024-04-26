import * as styles from './Profile.css'

import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import authService from '../../services/authService'
import useAuth from '../../hooks/useAuth'

import MoonLoader from 'react-spinners/MoonLoader'
import { FaEdit } from "react-icons/fa";

import TaCard from "../../components/common/TaCard"
import TaProfileCard from '../../components/common/TaProfileCard'

function Profile() {
    const { user } = useAuth()

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

    const { id, username, first_name, last_name, bio, profile_image, isAdmin } = userData;

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    const effectRan = useRef(false);
    useEffect(() => {
        if(effectRan.current === false){
            fetchUser();
    
            // Delay hiding the loading spinner for demonstration purposes
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
    
            // Clean up function
            return () => {
                clearTimeout(timer);
                effectRan.current = true;
            };
        }
    }, []);

    async function fetchUser(){
        try {
            const response = await authService.getById(id)
            const fetchedUser = await response.data
     
            // Updates state value
            setUserData(userOnMount => ({
                ...userOnMount,
                ...fetchedUser
            }));
            setLoading(false)
        } catch (error) {
            console.log(error.response)
            setError(true)
            setLoading(false)
            toast.error('Internal Server Error')
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
      if (loading) {
        return (
        <div>
                <div className='' style={{width: '968px'}}>
                    <TaProfileCard  className='' title="Loading...">
                        <MoonLoader className='m-auto'/>
                    </TaProfileCard>
                </div>
        </div>
        )
      }


  return (
    <div className={styles.profilePage}>

        <div className={styles.profileContainer}>

            <div className={styles.cardContainer}>
                <TaProfileCard title="">

                    <div className={styles.buttonSection}>
                        <Link to={`/profile/edit/${user.id}`} style={{textDecoration: 'none'}}><FaEdit className={styles.button} /></Link>
                    </div>

                    <img className={styles.profilePicture} src={profile_image}/>
                    <p className={styles.username}>@{username}</p>
                    <p className={styles.fullname}>{first_name} {last_name}</p>
                    <div className={styles.profileDetails}>
                        <p>{bio}</p>
                    </div>

                    {userData.isAdmin === true &&
                        <div className={styles.Admin}>
                            <div className={`${styles.DeveloperBadge} `}>
                                <p className='mb-0 p-1 '>Developer</p>
                            </div>
                            <div className={`${styles.AdminBadge} `}>
                                <p className='mb-0 p-1 '>Admin</p>
                            </div>
                        </div>
                    }
                </TaProfileCard>
            </div>
        </div>

        {/* ------- POSTS -------- */}
        <div className={styles.PostsContainer}>
            <TaCard title="">
                <p>There are currently no posts...</p>
            </TaCard>
        </div>

    </div>
  )
}

export default Profile