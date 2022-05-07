import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type team = {
  teamName: string
  code: string
  leaderName: string
  members: string[]
  money: number
  infra: number
  defensePoints: number
  inAlliance: boolean
  allianceWith: string
  allowed: boolean
  bombs: { bombName: string; quantity: number }[]
  gameStart: boolean
  round1: boolean
  round2: boolean
  round3: boolean
}

const initialState = {
  team: {
    teamName: "",
    code: "",
    leaderName: "",
    members: [],
    money: 0,
    infra: 0,
    defensePoints: 0,
    inAlliance: false,
    allianceWith: "None",
    completed: false,
    bombs: [],
    allowed: false,
    gameStart: false,
    round1: false,
    round2: false,
    round3: false,
  } as team,
}

export const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    addteam: (state, action: PayloadAction<team>) => {
      state.team = {
        ...action.payload,
        bombs: action.payload.bombs.filter(bomb => bomb.quantity > 0),
      }
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
