// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import Velocity from 'velocity-animate'
import $ from 'jquery'
import 'lib-flexible/flexible'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()
Vue.use(animate);
Vue.use(Velocity);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

