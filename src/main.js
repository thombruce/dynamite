import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import TNT from '@thombruce/tnt'

// TNT
import './index.css'

Vue.config.productionTip = false

Vue.use(TNT)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
