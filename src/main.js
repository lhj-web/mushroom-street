import Vue from 'vue';
import 'normalize.css';
import 'assets/css/base.css';
import { Swipe, SwipeItem, Lazyload } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
