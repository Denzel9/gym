import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './reducer'

export const store = configureStore({
  reducer: mainSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
