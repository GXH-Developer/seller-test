import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://47.107.239.7/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
