import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import TNT from '@thombruce/tnt'

import '@thombruce/tnt/src/assets/index.css'
import '@thombruce/tnt/dist/tnt.css'

Vue.use(TNT)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
