import axios from "axios"
import { assignCountryEndpoint } from "../Endpoints"

type input = { teamName: string; countryName: string }

const assignCountryAPI = async (input: input) => {
  try {
    const res = await axios[assignCountryEndpoint.method]<{ message: string }>(
      assignCountryEndpoint.url,
      input,
      {
        withCredentials: true,
      }
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default assignCountryAPI
