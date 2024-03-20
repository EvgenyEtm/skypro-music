import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './Slice/SliceTracks'
import authReducer from './Slice/SliceAuth'
import { playlistApi } from '../api/playlist'

export const store = configureStore({
  reducer: {
    track: trackReducer,
    auth: authReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
})
