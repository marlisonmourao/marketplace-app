import axios, { type AxiosInstance } from 'axios'

const baseURL = 'http://192.168.0.10:3001'

export class MarketPlaceApiClient {
  private readonly instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL,
    })
  }

  getInstance() {
    return this.instance
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance()
