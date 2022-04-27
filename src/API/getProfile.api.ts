import axios from "axios"
import { team } from "../Redux/Slices/team.slice"
import { profileEndpoint } from "./Endpoints"

const getProfileAPI = async () => {
  try {
    const res = await axios[profileEndpoint.method]<{ team: team }>(
      profileEndpoint.url,
      {
        withCredentials: true,
      }
    )
    return res.data.team
  } catch (err) {
    throw err
  }
}

export default getProfileAPI
