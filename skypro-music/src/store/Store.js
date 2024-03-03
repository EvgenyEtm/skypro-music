import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './Slice/SliceTracks'
import { playlistApi } from '../api/playlist'

export const store = configureStore({
  reducer: {
    track: trackReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
})
