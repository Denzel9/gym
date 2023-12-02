import { TrainingDayInterface } from '../types/user.interface'
import { addTrainingDayApi, axiosBase } from './API'

export const TrainingService = {
  async updateCalendar(payload: TrainingDayInterface[], id: string) {
    const { data } = await axiosBase.put(addTrainingDayApi(id), { calendar: payload })
    return data
  },

  async deleteTrainingDayInCalendar(payload: TrainingDayInterface[], id: string) {
    const { data } = await axiosBase.post(addTrainingDayApi(id), { calendar: payload })
    return data
  },
}
