import axios from "axios"
import { allianceEndpoint } from "./Endpoints"

type input = { teamName1: string; teamName2: string }

const allianceAPI = async (input: input) => {
  try {
    const res = await axios[allianceEndpoint.method]<{ message: string }>(
      allianceEndpoint.url,
      input
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default allianceAPI
