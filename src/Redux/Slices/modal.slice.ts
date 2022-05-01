import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type modalI = {
  visible: boolean
  type: "success" | "failure"
  message: string
  navigateTo: string
  callback: () => void
}

const initialState = {
  modal: {
    visible: false,
    type: "",
    message: "",
    navigateTo: "",
    callback: () => {},
  },
}

export const modalSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setSuccess: (
      state,
      action: PayloadAction<{
        message: modalI["message"]
        navigateTo: modalI["navigateTo"]
      }>
    ) => {
      state.modal = {
        ...action.payload,
        type: "success",
        visible: true,
        callback: () => {},
      }
    },
    setFailure: (
      state,
      action: PayloadAction<{
        message: modalI["message"]
        navigateTo: modalI["navigateTo"]
        callback?: () => void
      }>
    ) => {
      state.modal = {
        ...action.payload,
        callback: action.payload.callback ? action.payload.callback : () => {},
        type: "failure",
        visible: true,
      }
    },
    hide: state => {
      state.modal = { ...initialState.modal }
    },
  },
})

export const { setSuccess, setFailure, hide } = modalSlice.actions

export const selectModal = (state: RootState) => state.modal

const modalReducer = modalSlice.reducer

export default modalReducer
