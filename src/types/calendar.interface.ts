export interface TrainingDayInterface {
  date: string
  time: string
  type: string
  training: DayTraining[]
}

export interface DayTraining {
  exercise: string
  sets: SetsExercise[]
}

export interface SetsExercise {
  repeat: number
  weight: number
}
