import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../Slices/authentication.slice"
import loadingReducer from "../Slices/loading.slice"
import modalReducer from "../Slices/modal.slice"
import teamReducer from "../Slices/team.slice"

const store = configureStore({
  reducer: {
    team: teamReducer,
    auth: authenticationReducer,
    loading: loadingReducer,
    modal: modalReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
