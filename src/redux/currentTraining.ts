import { createSlice } from '@reduxjs/toolkit'

export interface ICartInitialState {
  exercises: {
    [exercise: string]: {}
  }
}

const initialState: ICartInitialState = {
  exercises: {},
}

export const currentTraining = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addExercise: (state, { payload }) => {
      state.exercises = { ...state.exercises, [payload]: {} }
    },
    createExercise: (state, { payload }) => {
      state.exercises = { ...state.exercises, ...payload }
    },
    saveExercise: (state, { payload }) => {
      state.exercises = {
        ...state.exercises,
        [payload.title]: {
          ...state.exercises[payload.title],
          [payload.step]: {
            repeat: payload.repeat,
            weight: payload.weight,
          },
        },
      }
    },
    deleteExercise: (state, { payload }) => {
      delete state.exercises[payload]
    },
  },
})

export const { saveExercise, createExercise, addExercise, deleteExercise } = currentTraining.actions
