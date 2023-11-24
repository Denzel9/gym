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
        [payload.field]: {
          ...state.exercises[payload.field],
          [payload.step]: {
            repeat: payload.repeat,
            weight: payload.weight,
          },
        },
      }
    },
  },
})

export const { saveExercise, createExercise } = currentTraining.actions
