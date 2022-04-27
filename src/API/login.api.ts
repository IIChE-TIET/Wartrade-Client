import axios from "axios"
import { team } from "../Redux/Slices/team.slice"
import { loginEndpoint } from "./Endpoints"

export type loginPayload = {
  teamName: string
  password: string
}

const loginAPI = async (loginPayload: loginPayload) => {
  try {
    const res = await axios[loginEndpoint.method]<team>(
      loginEndpoint.url,
      loginPayload,
      {
        withCredentials: true,
      }
    )
    console.log(res.data)
    return res.data
  } catch (err) {
    throw err
  }
}

export default loginAPI
