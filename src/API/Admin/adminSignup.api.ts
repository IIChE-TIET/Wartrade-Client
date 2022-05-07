import axios from "axios"
import { adminSignupEndpoint } from "../Endpoints"

type input = { name: string; password: string; code: string }

const adminSignupAPI = async (input: input) => {
  try {
    const res = await axios[adminSignupEndpoint.method]<{ message: string }>(
      adminSignupEndpoint.url,
      input,
      { withCredentials: true }
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default adminSignupAPI
