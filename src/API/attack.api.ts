import axios from "axios"
import { team } from "../Redux/Slices/team.slice"
import { attackEndpoint } from "./Endpoints"

type input = {
  teamName: string
  choosenBombs: { bombName: string; quantity: number }[]
}

const attackAPI = async (input: input): Promise<[string, team]> => {
  try {
    const res = await axios[attackEndpoint.method]<{
      message: string
      profile: team
    }>(attackEndpoint.url, input, {
      withCredentials: true,
    })
    return [res.data.message, res.data.profile]
  } catch (err) {
    throw err
  }
}

export default attackAPI
