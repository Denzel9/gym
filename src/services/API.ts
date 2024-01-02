import axios from 'axios'
const USER_URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api/users'
const CALENDAR_URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api/calendar'

export const userAxios = axios.create({
  baseURL: USER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const calendarAxios = axios.create({
  baseURL: CALENDAR_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

//userService
export const findUserApi = (userId: string) => `?userId=${userId}`

//calendarService
export const calendarApi = (userId: string) => `/${userId}`
