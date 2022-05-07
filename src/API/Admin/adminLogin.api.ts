import axios from "axios"
import { adminLoginEndpoint } from "../Endpoints"

type input = { name: string; password: string }

const adminLoginAPI = async (input: input) => {
  try {
    const res = await axios[adminLoginEndpoint.method]<{ message: string }>(
      adminLoginEndpoint.url,
      input,
      { withCredentials: true }
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default adminLoginAPI
