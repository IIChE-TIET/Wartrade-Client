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
      id: string
    }>(
      forgotPasswordVerifyTokenEndpoint.url +
        "/" +
        forgotPasswordVerifyTokenPayload.teamName +
        "/" +
        forgotPasswordVerifyTokenPayload.token
    )
    return res.data.id
  } catch (err) {
    throw err
  }
}

export default forgotPasswordVerifyTokenAPI
