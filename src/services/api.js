// minha chave: e89f82bb245a77c82888d3db7f5b28b6b099bd6f

import axios from "axios";

export const key = "e89f82bb245a77c82888d3db7f5b28b6b099bd6f"

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Authorization": `Bearer ${key}`
  }
})

export default api;