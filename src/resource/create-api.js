import {getAxios} from './axios'
import gConf from 'gConf'
console.log(gConf.apiHost)
export const api = getAxios({
  baseURL: gConf.apiHost.replace(/\/$/, ''),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})