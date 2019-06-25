'use strict'
import Vue from 'vue'
import '@/assets/styles/reset.css'
import '@/assets/js/flex'
import App from './home.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')