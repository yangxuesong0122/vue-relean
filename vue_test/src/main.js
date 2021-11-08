// 入口文件
import Vue from 'vue'
// 所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
