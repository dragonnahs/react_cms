import axios from 'axios'

const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 1000,
  headers: {'X-footer': 'footbar'}
})


instance.interceptors.request.use(function(config){
  return config
}, function(err){
  return Promise.reject(err)
})


instance.interceptors.response.use(function(response) {
  return response
}, function(err){
  return Promise.reject(err)
})


export default instance