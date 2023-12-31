import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  selectedSong: null,
  indexOfSong: null,
  shuffle: false,
  isPlaying: null,
  shuffleAllTracks: [],
}

export const tracksSlice = createSlice({
  name: 'tracksReducer',
  initialState,
  reducers: {
    getAllTracks: (state, action) => {
      state.allTracks = action.payload
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },

    setSingles: (state, action) => {
      const { track, indexOfSong } = action.payload
      state.selectedSong = track
      state.indexOfSong = indexOfSong
    },

    setNextTrack: (state, action) => {
      const { indexNextTrack, nextTrack } = action.payload
      state.selectedSong = nextTrack
      state.indexOfSong = indexNextTrack
    },

    setPrevTrack: (state, action) => {
      const { indexPrevTrack, prevTrack } = action.payload
      state.selectedSong = prevTrack
      state.indexOfSong = indexPrevTrack
    },

    setShuffledTracks: (state) => {
      state.shuffle = !state.shuffle
      if (state.shuffle) {
        state.shuffleAllTracks = shuffledArr(state.allTracks)
        console.log(state.shuffleAllTracks)
      }
    },
  },
})

const shuffledArr = (actions) => {
  const newArr = new Array(...actions)
  return newArr.sort(() => Math.random() - 0.5)
}

export const {
  getAllTracks,
  setIsPlaying,
  setSingles,
  setNextTrack,
  setPrevTrack,
  setShuffledTracks,
} = tracksSlice.actions

export default tracksSlice.reducer
