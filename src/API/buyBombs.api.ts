import axios from "axios"
import { team } from "../Redux/Slices/team.slice"
import { buyBombsEndpoint } from "./Endpoints"

type input = {
  bombName: string
  quantity: number
}

const buyBombsAPI = async (input: input): Promise<[string, team]> => {
  try {
    const res = await axios[buyBombsEndpoint.method]<{
      message: string
      profile: team
    }>(buyBombsEndpoint.url, input, {
      withCredentials: true,
    })
    return [res.data.message, res.data.profile]
  } catch (err) {
    throw err
  }
}

export default buyBombsAPI
