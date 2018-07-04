import Vue from 'vue';
import Router from 'vue-router';
import Info from '@/components/Info';
import Home from '@/components/Home';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: 'info',
        name: 'Info',
        component: Info
      }]
    }
  ]
});
