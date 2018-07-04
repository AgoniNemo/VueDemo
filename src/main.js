// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueBlu from 'vue-blu';
import 'vue-blu/dist/css/vue-blu.min.css';
import '../static/reset.css'; // 全局自定义样式

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueBlu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
