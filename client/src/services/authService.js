import api from './api';

// Register POST request
async function register(data){
    const response = await api.post(
        "auth/register",
        data
    )
    return response
}

// Login POST request
async function login(data){
    const response = await api.post(
        "auth/login",
        data
    )
    return response
}


const authServices = {
    register,
    login
}
export default authServices;