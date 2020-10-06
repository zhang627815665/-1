import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../pages/Classify/classify'),
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('../pages/Find/find'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../pages/Shop/shop'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../pages/Mine/mine'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login/login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/Register/register'),
    },
  ]
})
