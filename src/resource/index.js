const Resource = require('./create-api')
const {api} = Resource

// 获取图形验证码
export function getCaptcha (timestamp) {
  return api.get('user/captcha', {
    params: {
      timestamp
    }
  })
}