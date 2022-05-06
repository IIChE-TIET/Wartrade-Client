import axios from "axios"
import { team } from "../Redux/Slices/team.slice"
import { buyDefenseEndpoint } from "./Endpoints"

const buyDefensePointsAPI = async ({
  numOfPoints,
}: {
  numOfPoints: number
}): Promise<[string, team]> => {
  try {
    const res = await axios[buyDefenseEndpoint.method]<{
      message: string
      profile: team
    }>(buyDefenseEndpoint.url, { numOfPoints }, { withCredentials: true })

    return [res.data.message, res.data.profile]
  } catch (err) {
    throw err
  }
}

export default buyDefensePointsAPI
