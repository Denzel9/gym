import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'counter',
  initialState: {
    timer: 0,
    isBegining: false,
  },
  reducers: {
    incremented: (state) => {
      state.timer += 1
    },
    decremented: (state) => {
      state.timer -= 1
    },
    reset: (state) => {
      state.timer = 0
    },
    setIsBegining: (state) => {
      state.isBegining = !state.isBegining
    },
  },
})

export const { incremented, decremented, setIsBegining, reset } = mainSlice.actions
