import axios from "axios"
import { createTeamEndpoint } from "./Endpoints"

export type createTeamPayload = {
  teamName: string
  password: string
  leader: {
    name: string

    phone: string
    year: string
    branch: string
    email: string
  }
}

const createTeamAPI = async (createTeamPayload: createTeamPayload) => {
  try {
    const res = await axios[createTeamEndpoint.method]<{ message: string }>(
      createTeamEndpoint.url,
      createTeamPayload
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default createTeamAPI
