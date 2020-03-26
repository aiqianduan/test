// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
// import users from './components/users'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

// Vue.component('users',users)

/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
