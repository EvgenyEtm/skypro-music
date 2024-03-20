import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: null,
  refresh: null,
  token: null,
  user: null,
}

// const refresToken = JSON.parse(localStorage.getItem('token'))
// const accessToken = JSON.parse(localStorage.getItem('accessToken'))
// console.log(refresToken)
// console.log(accessToken)
export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    getAuthData: (state, action) => {
      //разбить на 2 функции.
      state.access = action.payload
      state.refresh = action.payload
      console.log(state.access)
    },
    setRelifeAccess: (state, action) => {
      console.log(action.payload)
      state.token = action.payload
      console.log(state.token)
      //console.log(state.token.access)
    },
    setAccessToken: (state, action) => {
      //state.token = action.payload
      // console.log(action.payload.token.access)
      state.access = action.payload.token.access
      state.refresh = action.payload.token.refresh
      state.token = action.payload.token
      console.log(state.token)
      // console.log(action.payload.access)
      // console.log(state.access)
    },
    setUserData: (state, action) => {
      // console.log(action.payload.userData)
      state.user = action.payload.userData
    },
    clearToken: (state) => {
      state.token = null
      localStorage.clear()
    },
  },
})
export const {
  getAuthData,
  setToken,
  clearToken,
  setAccessToken,
  setUserData,
  setRelifeAccess,
} = authSlice.actions

export default authSlice.reducer
