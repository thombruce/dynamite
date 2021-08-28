import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// TNT
import VueMeta from 'vue-meta'

// TNT
import './index.css'

Vue.config.productionTip = false

// TNT
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
