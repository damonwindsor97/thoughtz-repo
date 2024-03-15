// This file is to create context for our whole app to access
// We also are placing our localstorage functions within the context so it is all accessible

import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    // Global auth properties and methods  for our WHOLE application to access

    let navigate = useNavigate()

    // Contain user obbject and token if logged in
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getCurrentUser();
        setUser(userData)
    }, [])

    // 1. Register & Login
    // Take response from server, and save to localstorage
    // Takes our token, puts it into a String - then save it to state
    const loginSaveUser = async (user) => {
        const { token } = user;
        localStorage.setItem("userToken", JSON.stringify(token))
        setUser(jwtDecode(token))
    }

    // 2. Retrieve user from localStorage
    function getCurrentUser(){
        try {
            let token = localStorage.getItem("userToken");
            const savedUser = jwtDecode(token)
            return savedUser;
        } catch (error) {
            return null
        }
    }

    // 3, Logout
    function logoutUser(){
        localStorage.removeItem("userToken")
        setUser(null)
        navigate("/")
    }

    const value = {
        user,
        loginSaveUser,
        getCurrentUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}