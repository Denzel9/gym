import { TrainingDayInterface } from '../types/calendar.interface'
import { calendarApi, calendarAxios } from './API'

export const CalendarService = {
  async addCalendar(id: string) {
    const { data } = await calendarAxios.post('', { userId: id, calendar: [] })
    return data
  },

  async getCalendar(id: string) {
    const { data } = await calendarAxios.get(calendarApi(id))
    return data
  },

  async updateCalendar(payload: TrainingDayInterface[], id: string) {
    const { data } = await calendarAxios.put(calendarApi(id), { calendar: payload })
    return data
  },

  async deleteTrainingDayInCalendar(payload: TrainingDayInterface[], id: string) {
    const { data } = await calendarAxios.post(calendarApi(id), { calendar: payload })
    return data
  },
}
