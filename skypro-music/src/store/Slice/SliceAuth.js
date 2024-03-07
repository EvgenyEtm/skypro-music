import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: null,
  refresh: null,
}

const refresToken = JSON.parse(localStorage.getItem('token'))
const accessToken = JSON.parse(localStorage.getItem('accessToken'))
console.log(refresToken)
console.log(accessToken)
export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    getAuthData: (state) => {
      state.access = accessToken
      state.refresh = refresToken
      console.log(state.access)
    },
  },
})
export const { getAuthData } = authSlice.actions

export default authSlice.reducer
