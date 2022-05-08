import axios from "axios"
import { viewTeamsEndpoint } from "./Endpoints"

const viewTeamsAPI = async () => {
  try {
    const res = await axios[viewTeamsEndpoint.method]<{
      teams: {
        countryName: string
        infra: number
        defense: number
        money: number
      }[]
    }>(viewTeamsEndpoint.url)
    return res.data.teams
  } catch (err) {
    throw err
  }
}

export default viewTeamsAPI
