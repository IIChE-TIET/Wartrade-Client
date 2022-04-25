import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../Store"

const PREFIXED_KEY = "WARTRADE-LOGGEDIN"

const toBool = (str: string | null) => (str === "true" ? true : false)

export type auth = {
  loggedIn: boolean
}

export const authenticationSlice = createSlice({
  name: "authenticate",
  initialState: {
    loggedIn: toBool(localStorage.getItem(PREFIXED_KEY)) || false,
  },
  reducers: {
    login: state => {
      state.loggedIn = true
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(true))
    },

    logout: state => {
      state.loggedIn = false
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(false))
    },
  },
})

export const { login, logout } = authenticationSlice.actions

export const selectAuthentication = (state: RootState) => state.auth

const authenticationReducer = authenticationSlice.reducer

export default authenticationReducer
