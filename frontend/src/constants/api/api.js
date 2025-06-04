import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.0.6:3000/api/v1',
  // baseURL: 'http://192.168.100.45:3000/api/v1',
  baseURL: 'http://10.132.198.10:3000/api/v1',
})

export default api
