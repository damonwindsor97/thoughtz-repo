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

function put(id, data, uploadedFile){
    try {
        const formData = prepareFormData(data, uploadedFile);
        return api.put(
            '/auth/user/edit/' + id,
            formData,
            formConfig
        )
    } catch (error) {
        console.log(error)
    }
}

// Product Service "write" functions
// Set content header to multipart form
const formConfig = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

// Formart the mixed data that the form state provides
function prepareFormData(data, uploadedfile){
    let formData = new FormData();

      // Append reconfigured mixed data to new object
  formData.append('username', data.username);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('first_name', data.first_name);
  formData.append('last_name', data.last_name);
  formData.append('bio', data.bio);
  formData.append('profile_image', data.profile_image);
//   if theres an uploaded file, append it to the form data
  if (uploadedfile) {
    formData.append('uploadedFile', uploadedfile);
  }

  return formData;
}

const authService = {
    register, login, getById, put
}

export default authService