import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../Slices/authentication.slice"
import teamReducer from "../Slices/team.slice"

const store = configureStore({
  reducer: {
    team: teamReducer,
    auth: authenticationReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
