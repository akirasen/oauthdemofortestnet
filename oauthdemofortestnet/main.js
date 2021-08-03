import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import { comRequest } from './util/api.js'
Vue.prototype.$comRequest = comRequest

const app = new Vue({
    ...App
})
app.$mount()
