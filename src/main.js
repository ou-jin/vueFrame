// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import httpRequest from '@/http/httpRequest' // api: https://github.com/axios/axios
import commentCss from './css/Universal.css'
import components from './plugins/components.js'
import store from '@/store'
Vue.use(components)
Vue.use(commentCss)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = httpRequest
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
