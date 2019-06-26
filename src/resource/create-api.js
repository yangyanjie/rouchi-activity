import {getAxios} from './axios'
import gConf from 'gConf'
export const apiCourse = getAxios({
  baseURL: gConf.courseHost.replace(/\/$/, ''),
  headers: {
    'Content-Type': 'application/json'
  }
})
