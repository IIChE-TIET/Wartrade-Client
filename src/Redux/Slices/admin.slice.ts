import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type adminI = {
  loggedIn: boolean
}

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    adminLogin: state => {
      state.loggedIn = true
    },

    adminLogout: state => {
      state.loggedIn = false
    },
  },
})

export const { adminLogin, adminLogout } = adminSlice.actions

export const selectAdmin = (state: RootState) => state.admin

const adminReducer = adminSlice.reducer

export default adminReducer
