import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import './css/animations.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
