import axios from "axios"
import { forgotPasswordChangeEndpoint } from "./Endpoints"

export type forgotPasswordChangePayload = {
  id: string
  password: string
}

const forgotPasswordChangeAPI = async (
  forgotPasswordChangePayload: forgotPasswordChangePayload
) => {
  try {
    const res = await axios[forgotPasswordChangeEndpoint.method]<{
      message: string
    }>(forgotPasswordChangeEndpoint.url, forgotPasswordChangePayload, {
      withCredentials: true,
    })
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default forgotPasswordChangeAPI
