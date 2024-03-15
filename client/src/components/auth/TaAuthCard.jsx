import * as styles from './TaAuthCard.css';

import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

import BarLoader from 'react-spinners/BarLoader'
import TaButton from '../common/TaButton'
import ClerkImage from '../../assets/clerk-logo.png'

import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

export default function TaAuthCard() {
    const navigate = useNavigate();
    const { loginSaveUser  } = useAuth();
    const passwordConfirmRef = useRef()
    const [tab, setTab] = useState(1);
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    // Destructure our state object
    const {username, email, password} = user;
    
    const tabChange = (event, newTab) => {
        setTab(newTab);
    };
    // Handle state value changes on input change
    const handleTextChange = (e) => {
    setUser({
        // Gain Access to object with spread operator
        ...user,
        // Find input being changed, updates state accordingly
        [e.target.name]: e.target.value
    });
    }

    // Our SIGNUP HandleSubmit
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Password check
        if(password !== passwordConfirmRef.current.value){
            toast.error("Passwords do not match")
            setTimeout(() => {setLoading(false)}, 1000)
            return;
        }

        // Call to our API
        try {
            const response = await axios.post("/api/auth/register", user)
            // Navigate use to the Main Page
            loginSaveUser(response.data)
            navigate('/feed')
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data)
            setTimeout(() => {setLoading(false)}, 1000)
        }

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Call to our API
        try {
            const response = await axios.post("/api/auth/login", user)
            loginSaveUser(response.data)
            // Navigate use to the Main Page
            navigate('/feed')
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data)
            setTimeout(() => {setLoading(false)}, 1000)
        }

    }


    return (
        <div className={styles.CardContainer}>
            <Tabs value={tab} onChange={tabChange}>
                <div className={styles.AuthMenu}>
                    <TabsList>
                      <div className={styles.TabBlock}>
                        <Tab value={1} className={`${styles.LoginMenuItem} ${tab === 1 && styles.ActiveTab}`}>
                            LOGIN
                        </Tab>
                      </div>
                      <div className={styles.TabBlock}>

                      </div>
                      <div className={styles.TabBlock}>
                        <Tab value={2} className={`${styles.LoginMenuItem} ${tab === 2 && styles.ActiveTab}`}>
                            SIGNUP
                        </Tab>
                      </div>
                    </TabsList>
                </div>
                <div className={styles.AuthCard}>
                    <TabPanel value={1}>
                        <div className={styles.LoginCard}>
                            <div className={styles.CardContent}>
                                <form onSubmit={handleLogin}>
                                    <div className={styles.CardInputs}>
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
                                    </div>

                                    <div className={styles.CardFooter}>
                                    <TaButton content="Log In" type="submit"/>

                                    <div className={styles.AltSignIn}>
                                        <Link>Or Sign-In via Clerk <img src={ClerkImage} className={styles.ClerkLogo}/></Link>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                    </TabPanel>
                    <TabPanel value={2}>
                        <div className={styles.SignupCard}>
                            <div className={styles.CardContent}>
                                <form onSubmit={handleRegister}>
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

                                    <input 
                                        type="password" 
                                        ref={passwordConfirmRef}
                                        placeholder='Confirm Password' 
                                        className={styles.SignupInputField}
                                    />
                                </div>

                                <div className={styles.CardFooter}>
                                    <TaButton content={loading ? <BarLoader/> : "Sign Up"} type="submit" onClick={handleRegister}/>

                                    <div className={styles.AltSignIn}>
                                    <Link>Or Sign-In via Clerk <img src={ClerkImage} className={styles.ClerkLogo}/></Link>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
}