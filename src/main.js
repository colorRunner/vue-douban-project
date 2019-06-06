import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

import './assets/css/fonts.css'

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components: {App}
})
