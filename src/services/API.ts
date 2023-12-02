import axios from 'axios'
const URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api/users'
export const axiosBase = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

//user
export const findUserApi = (userId: string) => `?userId=${userId}`

//training
export const addTrainingDayApi = (userId: string) => `/${userId}`
