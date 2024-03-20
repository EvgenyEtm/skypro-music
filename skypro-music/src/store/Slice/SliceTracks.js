import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  selectedSong: null,
  indexOfSong: null,
  shuffle: false,
  isPlaying: null,
  shuffleAllTracks: [],
  isliked: false,
  isLikedIds: [],
}

// const likedArr = (actions) => {
//   const newArr = [...actions]
//   return newArr
// }

// const makeUniq = (arr) => {
//   return arr.filter((el, id) => arr.indexOf(el) === id)
// }

export const tracksSlice = createSlice({
  name: 'tracksReducer',
  initialState,
  reducers: {
    getAllTracks: (state, action) => {
      state.allTracks = action.payload
      //console.log(state.allTracks.map((track) => track))
    },
    setFavoriteTracks: (state, action) => {
      state.isLikedIds = action.payload
      //     console.log(state.isLikedIds.map((track) => track.id))
    },

    removeTrack: (state, action) => {
      console.log(action.payload)
      state.isLikedIds = state.isLikedIds.filter(
        (isLiked) => isLiked.id !== action.payload,
      )
    },

    addTrack: (state, action) => {
      console.log(action.payload.track)

      // console.log(action.payload)
      // state.isLikedIds = action.payload
      // console.log(state.isLikedIds)
      state.isLikedIds.push(action.payload.track)
      console.log(state.isLikedIds.map((tracks) => tracks))
      // state.isLikedIds.push({
      //   track,
      //   // album: track.album,
      //   // author: track.author,
      //   // duration_in_seconds: track.duration_in_seconds,
      //   // genre: track.genre,
      //   // id: track.id,
      //   // logo: track.logo,
      //   // name: track.name,
      //   // release_date: track.release_date,

      //   // id: track.id,
      //   // name: track.name,
      // })
    },
    // setFavoriteTracks: (state, action) => {
    //   // console.log(state.isLikedIds.length)
    //   //console.log(state.isLikedIds.map((track) => track))
    //   //const likedTrack = action.payload
    //   console.log(action.payload.track.id)
    //   if (state.isLikedIds.length > 0) {
    //     const toggledLike = state.isLikedIds.find(
    //       (track) => track.id === action.payload.track.id,
    //     )
    //     if (toggledLike === undefined) {
    //       state.isLikedIds = [...state.isLikedIds, action.payload.track]
    //       console.log(state.isLikedIds)
    //       return
    //     }
    //     console.log(`${state.isLikedIds}--`)
    //     return
    //   }
    //   state.isLikedIds = [...state.isLikedIds, action.payload.track]

    //   // toggledLike.isliked = !toggledLike.isliked
    //   // console.log(toggledLike.isliked)

    //   // console.log(state.isLikedIds)
    //   // state.isLikedIds = makeUniq(state.isLikedIds)
    //   console.log(state.isLikedIds)
    // },

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
      }
    },
  },
})

//const add = ()

const shuffledArr = (actions) => {
  const newArr = new Array(...actions)
  return newArr.sort(() => Math.random() - 0.5)
}

export const {
  removeTrack,
  setFavoriteTracks,
  getAllTracks,
  setIsPlaying,
  setSingles,
  setNextTrack,
  setPrevTrack,
  setShuffledTracks,
  addTrack,
} = tracksSlice.actions

export default tracksSlice.reducer
