import { TrainingDayInterface } from './calendar.interface'

export interface UserIterface {
  avatar: string
  calendar: TrainingDayInterface[]
  createdAt: string
  id: string
  name: string
  userId: string
}
