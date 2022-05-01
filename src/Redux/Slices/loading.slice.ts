import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type loadingI = {
  loading: boolean
}

export const loadingSlice = createSlice({
  name: "authenticate",
  initialState: {
    loading: false,
  },
  reducers: {
    startLoading: state => {
      state.loading = true
    },

    stopLoading: state => {
      state.loading = false
    },
  },
})

export const { startLoading, stopLoading } = loadingSlice.actions

export const selectLoading = (state: RootState) => state.loading

const loadingReducer = loadingSlice.reducer

export default loadingReducer
