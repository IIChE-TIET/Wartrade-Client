import axios from "axios"
import { forgotPasswordVerifyTokenEndpoint } from "./Endpoints"

export type forgotPasswordVerifyTokenPayload = {
  token: string
  teamName: string
}

const forgotPasswordVerifyTokenAPI = async (
  forgotPasswordVerifyTokenPayload: forgotPasswordVerifyTokenPayload
) => {
  try {
    const res = await axios[forgotPasswordVerifyTokenEndpoint.method]<{
      message: string
    }>(forgotPasswordVerifyTokenEndpoint.url, {
      params: {
        token: forgotPasswordVerifyTokenPayload.token,
        teamName: forgotPasswordVerifyTokenPayload.teamName,
      },
    })
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default forgotPasswordVerifyTokenAPI
