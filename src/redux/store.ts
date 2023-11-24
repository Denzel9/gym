import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './reducer'
import { currentTraining } from './currentTraining'


export const store = configureStore({
  reducer: {
    timer: mainSlice.reducer,
    currentTraining: currentTraining.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
