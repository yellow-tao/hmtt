import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入样式
import './styles/base.less'
Vue.config.productionTip = false
//导入vant
import './utils/vant'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
