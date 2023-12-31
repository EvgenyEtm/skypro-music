import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './Slice/SliceTracks'

export const store = configureStore({
  reducer: {
    track: trackReducer,
  },
})
