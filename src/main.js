import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueVega from 'vue-vega';

Vue.use(VueVega);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
