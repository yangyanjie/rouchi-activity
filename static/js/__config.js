const config = {
  qiniuConfig: {
    domain: 'https://static.rouchi.com/',
    videoDomain: 'https://media.rouchi.com/'
  },
  avatar: {
    t1: '?imageView2/1/w/100/h/100',
    t2: '?imageView2/1/w/200/h/200',
    t3: '?imageView2/1/w/175/h/175',
    t4: '?imageView2/1/w/40/h/40',
    t5: '?imageView2/1/w/180/h/180'
  },
  payHost: 'https://payment-dev.rouchi.com/',
  apiHost: 'https://wechat-api-dev.rouchi.com/',
  courseHost: 'https://schedule-tst.rouchi.com/',
  teacherHost: 'https://tp-api-tst.rouchi.com/',
  sentryDSN: 'https://735e60b1875045cd89a0e27d8687e825@st.rouchi.com/22',
  ga_tracking_id: 'UA-104925833-1',
  // 是否开启限制, true 为开启， false 为不开启限制
  attend_class_limit: true,
  env: 'dev'
}
if (typeof window !== 'undefined' && window.document) {
  window.__gConf = config
} else {
  module.exports = config
}