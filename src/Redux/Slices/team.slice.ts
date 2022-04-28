import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type team = {
  teamName: string
  code: string

  leaderName: string
  members: string[]
}

const initialState = {
  team: {
    teamName: "",
    code: "",
    leaderName: "",

    members: [],
    completed: false,
  } as team,
}

export const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    addteam: (state, action: PayloadAction<team>) => {
      state.team = { ...action.payload }
    },

    resetteam: state => {
      state.team = initialState.team
    },
  },
})

export const { addteam, resetteam } = teamSlice.actions

export const selectTeam = (state: RootState) => state.team

const teamReducer = teamSlice.reducer

export default teamReducer
