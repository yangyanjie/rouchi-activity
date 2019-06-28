+ function () {
  window.util = {
    // 检测是否是微信内置浏览器
    isWeiXin: function() {
      return /microMessenger/ig.test(window.navigator.userAgent.toLowerCase())
    },
    // 检测是否是支付宝内置浏览器
    isAlipay: function() {
      return /alipay/gi.test(window.navigator.userAgent.toLowerCase())
    },
    //判断ios
    isIos: function() {
      return /iPad|iPhone|iPod/g.test(window.navigator.userAgent.toLowerCase());
    },
    //判断andriod
    isAndroid: function() {
      return /(?:android)/i.test(window.navigator.userAgent.toLowerCase());
    },
    browser: {
      versions: function() {
          var u = navigator.userAgent;
          return {     //移动终端浏览器版本信息
              trident: u.indexOf('Trident') > -1, //IE内核
              presto: u.indexOf('Presto') > -1, //opera内核
              webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
              mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
              iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
              iPad: u.indexOf('iPad') > -1, //是否iPad
              webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
          };
      } (),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },
    apiLocal: function () {
      return location.origin
    },
    assign: function (target, source) {
      'use strict'
      if (target === null || target === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined')
      }
      var from
      var to = Object(target)
      var symbols
      var getOwnPropertySymbols = Object.getOwnPropertySymbols
      var hasOwnProperty = Object.prototype.hasOwnProperty
      var propIsEnumerable = Object.prototype.propertyIsEnumerable
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s])
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key]
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from)
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]]
            }
          }
        }
      }
      return to
    },
    toast: function (content, options) {
      var _sington
      if (_sington) return
      if (typeof content !== 'string') {
        return console.error('content必须为字符串')
      }
      if (typeof options === 'number') {
        options = {
          duration: options
        }
      }
      if (typeof options === 'function') {
        options = {
          callback: options
        }
      }
      options = util.assign({
        content: content,
        duration: 2000,
        iconClass: '',
        iconText: '',
        position: 'middle',
        callback: function () {}
      }, options)
      var iconClass = options.iconClass
      var iconText = options.iconText
      var position = options.position
      var toastStyle = 'padding:0.4rem'
      var contentStyle = iconClass ? 'padding-top:0.2rem' : ''
      var $toastWrap = document.createElement('div')
      $toastWrap.classList.add('lib-toast-wrapper')
      var tpl = '<div class="lib-mask-transparent"></div>' +
        '<div class="lib-toast lib-toast-' + position + '" style="' + toastStyle + '">' +
        '<i class="lib-toast-icon ' + iconClass + '">' + iconText + '</i>' +
        '<p class="lib-toast-content" style="' + contentStyle + '">' + content + '</p>' +
        '</div>'
      $toastWrap.innerHTML = tpl
      var $mask = $toastWrap.querySelector('.lib-mask-transparent')
      var $toast = $toastWrap.querySelector('.lib-toast')
      document.body.appendChild($toastWrap)
      $mask.classList.add('lib-animate-fade-in')
      $toast.classList.add('lib-animate-zoom-in')
      function animateEnd () {
        document.body.removeChild($toastWrap)
        _sington = false
        options.callback()
      }
      var timer = setTimeout(function () {
        $mask.classList.add('lib-animate-fade-out')
        $toast.classList.add('lib-animate-zoom-out')
        $toast.addEventListener('animationend', animateEnd, false)
        $toast.addEventListener('webkitAnimationEnd', animateEnd, false)
        clearTimeout(timer)
      }, options.duration)
      _sington = $toastWrap
      return $toastWrap
    },
    getQuery: function () {
      var url = decodeURIComponent(location.search) // 获取url中"?"符后的字串
      var theRequest = {}
      if (url.indexOf('?') !== -1) {
        var strs = url.substr(1).split('&')
        for (var i = 0, len = strs.length; i < len; i++) {
          theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
        }
      }
      return theRequest
    },
    getCookie: function (cName) {
      if (document.cookie.length > 0) {
        var cStart = document.cookie.indexOf(cName + '=')
        if (cStart > -1) {
          cStart = cStart + cName.length + 1
          var cEnd = document.cookie.indexOf(';', cStart)
          if (cEnd === -1) cEnd = document.cookie.length
          return decodeURIComponent(document.cookie.substring(cStart, cEnd))
        }
      }
      return ''
    }
  }
} ()
