import * as styles from './TaSignup.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import TaButton from '../common/TaButton'
import ClerkImage from '../../assets/clerk-logo.png'

function TaSignup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)

  // Destructure our state object
  const {username, email, password} = user;

  // Handle state value changes on input change
  const handleTextChange = (e) => {
    setUser({
      // Gain Access to object with spread operator
      ...user,
      // Find input being changed, updates state accordingly
      [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi")
  }

  return (
    <div className={styles.SignupCard}>
      <div className={styles.CardContent}>
        <form onSubmit={handleSubmit}>
          <div className={styles.CardInputs}>
          <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              className={styles.SignupInputField}
              onChange={handleTextChange}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              className={styles.SignupInputField}
              onChange={handleTextChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className={styles.SignupInputField}
              onChange={handleTextChange}
            />
            <input type="password" name="passwordConfirm" placeholder='Confirm Password' className={styles.SignupInputField}></input>
          </div>

          <div className={styles.CardFooter}>
            <TaButton content="Sign Up" type="submit" onClick={handleSubmit}/>

            <div className={styles.AltSignIn}>
              <Link>Or Sign-In via Clerk <img src={ClerkImage} className={styles.ClerkLogo}/></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaSignup