import { DayTraining, TrainingDayInterface } from '../types/user.interface'

export const initTraning = {
  Бицепс: [],
  Трицепс: [],
  'Подьем на плечи прямо': [],
  'Подьем на плечи в бок': [],
}

export const initExerciseType: { type: string; exercise: string[]; disabled: boolean }[] = [
  {
    type: 'Выберите тип тренировки',
    exercise: [],
    disabled: true,
  },
  {
    type: 'Верхнеплечевой',
    exercise: ['Бицепс', 'Трицепс', 'Жим гантелей вверх', 'Жим гантелей в бок'],
    disabled: false,
  },
  { type: 'Спина', exercise: ['Трапеция', 'Широчайшие'], disabled: false },
  {
    type: 'Ноги',
    exercise: ['Присед', 'Сибание ног в тренажере', 'Разгибание ног в тренажере'],
    disabled: false,
  },
  {
    type: 'Кардио',
    exercise: ['Велотренажер', 'Беговая дорожка'],
    disabled: false,
  },
]

// Верхнеплечевой
export const typeTraining = {
  upperBody: [
    {
      exercise: 'Бицепс',
      sets: [
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
      ],
    },
    {
      exercise: 'Трицепс',
      sets: [
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
        { repeat: 0, weight: 0 },
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
  trainingType: DayTraining[],
  type: string
): TrainingDayInterface => ({
  date: date,
  training: trainingType,
  type: '1',
  time: '00:00:00',
})

export const initExercise = (exercise: string) => ({
  exercise: exercise,
  sets: [],
})
