import api from './api'

// REGISTER POST
async function register(data){
    const response = await api.post(
        "auth/register",
        data
    );
    console.log(response?.data)
    return response
}


// LOGIN PSOT
async function login(data){
    const response = await api.post(
        "auth/login",
        data
    );
    return response
}

async function getById(id){
    const response = await api.get(
        '/auth/user/' + id
    )
    return response
}

const authService = {
    register, login, getById
}

export default authService