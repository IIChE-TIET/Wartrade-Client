import axios from "axios"
import { forgotPasswordGenTokenEndpoint } from "./Endpoints"

export type forgotPasswordGenTokenPayload = {
  teamName: string
}

const forgotPasswordGenTokenAPI = async (
  forgotPasswordGenTokenPayload: forgotPasswordGenTokenPayload
) => {
  try {
    const res = await axios[forgotPasswordGenTokenEndpoint.method]<{
      message: string
    }>(forgotPasswordGenTokenEndpoint.url, forgotPasswordGenTokenPayload)
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default forgotPasswordGenTokenAPI
