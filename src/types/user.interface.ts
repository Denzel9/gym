export interface UserIterface {
  avatar: string
  calendar: TrainingDayInterface[]
  createdAt: string
  id: string
  name: string
  userId: string
}

export interface TrainingDayInterface {
  date: string
  time: string
  training: DayTraining[]
}

export interface DayTraining {
  exercise: string
  sets: SetsExercise
}

export interface SetsExercise {
  repeat: number
  weight: number
}
