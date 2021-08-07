import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_SERVICE
Vue.use(Loading,{
  canCancel: true,
  color: '#406494'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

