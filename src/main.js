import Vue from 'vue';
import App from './App.vue';

import VueWait from 'vue-wait';
import Notifications from 'vue-notification';

import router from './router';
import store from './store';
import moment from 'moment';

import '@/helpers/registration-helpers';

import 'normalize.css';

Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

Vue.use(VueWait);
Vue.use(Notifications);

new Vue({
  render: h => h(App),
  router,
  store,
  wait: new VueWait({
    useVuex: true,
  }),
}).$mount('#app')
