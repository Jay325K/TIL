import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// ./-> 최상위 경로 (여기선 src)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
