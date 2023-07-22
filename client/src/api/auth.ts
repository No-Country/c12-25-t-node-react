import axios from 'axios'
const URL = 'https://appartments-api.onrender.com/api/'

export const loginRequest = async (email: string, password: string) => {
  let endpoint = `${URL}/login`
  return axios.post(endpoint, {
    email,
    password,
  })
}

export const registerRequest = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let endpoint = `${URL}/create`
  return axios.post(endpoint, {
    firstName,
    lastName,
    email,
    password,
  })
}
