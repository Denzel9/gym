import { DayTraining, TrainingDayInterface } from '../types/user.interface'

export const initTraning = {
  Бицепс: [],
  Трицепс: [],
  'Подьем на плечи прямо': [],
  'Подьем на плечи в бок': [],
}

// Верхнеплечевой
export const typeTraining = {
  upperBody: [
    {
      exercise: 'Бицепс',
      sets: [
        {
          repeat: 0,
          weight: 0,
        },
        {
          repeat: 0,
          weight: 0,
        },
        {
          repeat: 0,
          weight: 0,
        },
      ],
    },
    {
      exercise: 'Трицепс',
      sets: [
        {
          repeat: 0,
          weight: 0,
        },
        {
          repeat: 0,
          weight: 0,
        },
        {
          repeat: 0,
          weight: 0,
        },
      ],
    },

    {
      exercise: 'Жим гантелей вверх',
      sets: [
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
      ],
    },
    {
      exercise: 'Жим гантелей в бок',
      sets: [
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
      ],
    },
  ],
}

export const initDayTraining = (
  date: string,
  trainingType: DayTraining[]
): TrainingDayInterface => ({
  date: date,
  training: trainingType,
  time: '00:00:00',
})
