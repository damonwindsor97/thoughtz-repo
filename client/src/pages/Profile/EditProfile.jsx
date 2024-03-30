import * as styles from './EditProfile.css'

import { useState, useRef, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import authService from '../../services/authService';

import MoonLoader from 'react-spinners/MoonLoader';
import BarLoader from 'react-spinners/BarLoader'

import TaCard from '../../components/common/TaCard'
import TaButton from '../../components/common/TaButton'

function EditProfile() {
  const navigate = useNavigate();
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [ error, setError] = useState(false)
  const [uploadedFile, setUploadedFile] = useState("")
  const [user, setUser] = useState({
    id: params.id,
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    bio: "",
    profile_image: "",
    isAdmin: false
  });
  // Destructure our state object
  const { id, username, email, first_name, last_name, bio, profile_image } = user;

  //   Fetch product function
const effectRan = useRef(false);
useEffect(() => {
  if(effectRan.current == false){
    fetchUser()
    setLoading(false)

    return () => {
      effectRan.current = true
    }
  }
}, [id])

async function fetchUser(){
  try {
      const response = await authService.getById(id)
      const fetchedUser = await response.data;

      // Updates state value
      setUser(userOnMount => ({
          ...userOnMount,
          ...fetchedUser
      }));
  } catch (error) {
      console.log(error.response)
      setError(true)
  }
}
  

  // Handle state value changes on input change
  const handleTextChange = (e) => {
  setUser({
      // Gain Access to object with spread operator
      ...user,
      // Find input being changed, updates state accordingly
      [e.target.name]: e.target.value
  });
  }

    // [2] handleFileChange will handle change in state for FILE data
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setUser({ ...user, profile_image: file });

    }  

 // [3] handleSubmit will control form submission event
 const handleSubmit = async (e) => {
  e.preventDefault();      
  setLoading(true);
  try {

    // API Post (refactored)
    const response = await authService.put(id, user, uploadedFile);

    navigate('/store/products');

  } catch (err) {
    console.log(err?.response);
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
    setTimeout(() => {setLoading(false)}, 1000);
  }
};

      // CONDITIONAL LOAD: ERROR
      if (error) {
        return (
          <div className='text-center mt-5'>
            <p>Error loading page...</p>
    
          </div>
        )
      }
    
      // CONDITIONAL LOAD: LLOADING
      if (loading && effectRan.current === false) {
        return (
          <div className='text-center mt-4'>
            <MoonLoader />
          </div>
        )
      }


  return (
    <div className='mt-5'>
        <div>
            <TaCard title="Edit Profile" >
            <form onSubmit={handleSubmit}>
              <div >
              <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  className={styles.SignupInputField}
                  onChange={handleTextChange}
                  />
              <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  className={`${styles.SignupInputField} w-50`}
                  onChange={handleTextChange}
                  />
              <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  className={`${styles.SignupInputField} w-50`}
                  onChange={handleTextChange}
                  />
              <textarea
                  type="text"
                  name="bio"
                  value={bio}
                  placeholder="Bio"
                  className={`${styles.SignupInputField} h-25`}
                  onChange={handleTextChange}
                  />

                  <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  className={styles.SignupInputField}
                  onChange={handleTextChange}
                  disabled
                  hidden
                  />
                  <input
                      type="password"
                      name="password"
                      value=""
                      placeholder="*********"
                      className={styles.SignupInputField}
                      onChange={handleTextChange}
                      disabled
                      hidden
                  />
                  <label>Profile Picture</label>
                  <input
                  type="file"
                  name="profile_image"
                  value=""
                  placeholder="Profile Picture"
                  className={`${styles.SignupInputField}`}
                  onChange={handleFileChange}
                  />

              </div>

              <div>
                  <TaButton content={loading ? <BarLoader/> : "Submit"} type="submit" />

              </div>
              </form>
            </TaCard>
        </div>
    </div>
  )
}

export default EditProfile