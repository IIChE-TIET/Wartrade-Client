import axios from "axios"
import { joinTeamEndpoint } from "./Endpoints"

export type joinTeamPayload = {
  code: string
  member: {
    name: string
    phone: string
    year: string
    branch: string
    email: string
  }
}

const joinTeamAPI = async (joinTeamPayload: joinTeamPayload) => {
  try {
    const res = await axios[joinTeamEndpoint.method]<{ message: string }>(
      joinTeamEndpoint.url,
      joinTeamPayload
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default joinTeamAPI
