import axios from 'axios'
const URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api/users'
export const axiosBase = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const findUserApi = (userId: string) => `?userId=${userId}`