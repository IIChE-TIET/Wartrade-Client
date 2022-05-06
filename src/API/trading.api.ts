import axios from "axios"
import { tradingEndpoint } from "./Endpoints"

type input = {
  countrySellingName: string
  countryBuyingName: string
  bombName: string
  quantity: number
  money: number
}

const tradingAPI = async (input: input) => {
  try {
    const res = await axios[tradingEndpoint.method]<{ message: string }>(
      tradingEndpoint.url,
      input
    )
    return res.data.message
  } catch (err) {
    throw err
  }
}

export default tradingAPI
