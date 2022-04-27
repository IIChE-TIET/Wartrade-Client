import axios from "axios"
import { logoutEndpoint } from "./Endpoints"

const logoutAPI = async () => {
  try {
    await axios[logoutEndpoint.method](logoutEndpoint.url, {
      withCredentials: true,
    })
  } catch (err) {
    console.log(err)
  }
}

export default logoutAPI
