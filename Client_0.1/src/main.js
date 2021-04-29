// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

import Toasted from 'vue-toasted'
import { store } from '../store/store'
import Popover from 'vue-js-popover'
import VeeValidate from 'vee-validate'
import Moment from 'vue-moment-jalaali'
import Raphael from 'raphael/raphael'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJWT from 'vuejs-jwt'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import '../node_modules/vuetify/dist/vuetify.min.css'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
// seimport { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


const datepickerOptions = {}
global.Raphael = Raphael
export const bus = new Vue();
Vue.use(VueJWT);
Vue.use(Moment)
Vue.use(Popover)
Vue.use(VeeValidate)
Vue.use(Vuetify);
Vue.use(Toasted);
Vue.use(VueAxios, axios);
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.config.productionTip = false;
axios.interceptors.request.use(
  function(config) {
    if (config.url.indexOf('/login') === -1) {
      let token = sessionStorage.getItem('authorization')
      if (token) {
        config.headers.common['Authorization'] = token
        config.headers.post['Content-Type'] = 'application/json';
        config.headers.common['windowName'] = window.name;
      } else {
        if (config.url.indexOf('/logout') !== -1) {
          sessionStorage.removeItem('authorization');
          router.replace('/Login');
        }
      }
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
);

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // const currentUser = Vue.$jwt.decode(response.headers.authorization,'secret');
      // console.log(currentUser);
      // response.currentUser = currentUser;
         
    } else if (response.status === 208) {
      Vue.toasted.error('Found another active session', {
        theme: 'bubble',
        duration: 6000
      });
      sessionStorage.removeItem('authorization');
      router.replace('/Login');
      return response;
    }
    return response;
  },
  function(error) {
    if (error.response.status === 504) {
      Vue.toasted.error('It seems your server or internet connection is down.', {
        theme: 'bubble',
        duration: 6000
      });
      router.replace('/Login')
      return false
    }
    if (error.response.status === 401 || error.response.status === 400) {
      Vue.toasted.error('Invalid User Name and Password', {
        theme: 'bubble',
        duration: 6000
      })
      sessionStorage.removeItem('authorization')
      router.replace('/Login')
    }
    if (error.response.status === 406) {
      // console.log('Please use secured browser...')
      Vue.toasted.error('Please use secured browser', {
        theme: 'bubble',
        duration: 6000
      })
      sessionStorage.removeItem('authorization')
      router.replace('/Login')
    } 
    if (error.response.status === 500) {
      Vue.toasted.error(error.response.data.text, {
        theme: 'bubble',
        duration: 6000
      })
      sessionStorage.removeItem('authorization')
      router.replace('/Login')
    }
    return Promise.reject(error)
  }
)


axios.defaults.baseURL = 'http://localhost:8080/server/app1'

router.beforeEach((to, from, next) => {
  // next()
  if (to.meta.isOpenUrl === true) {
    next()
  } else {
     if (sessionStorage.getItem('authorization') == null || sessionStorage.getItem('authorization') === '') {
      next();
      router.replace('/Login')
     } else {
       next()
     }
    next()
  }
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
