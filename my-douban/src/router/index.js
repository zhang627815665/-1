import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,      
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../pages/Home/home'),    
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: () => import('../pages/Broadcast/broadcast'),
      meta: {
        tabbarShow: true
      },
     
      children:[
        {
          path: 'movie',
          name: 'movie',
          component: () => import('../pages/Broadcast/sub/movie.vue')
      },
        {
          path: 'read',
          name: 'read',
          component: () => import('../pages/Broadcast/sub/read.vue')
        },
        {
          path: 'tv',
          name: 'tv',
          component: () => import('../pages/Broadcast/sub/tv.vue')
        },
        {
          path: 'city',
          name: 'city',
          component: () => import('../pages/Broadcast/sub/city.vue')
        },
        {
          path: 'music',
          name: 'music',
          component: () => import('../pages/Broadcast/sub/music.vue')
        },
    ]
    },
    {
      path: '/audio',
      name: 'audio',
      component: () => import('../pages/Audio/audio'),
      
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../pages/Group/group'),
      
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../pages/Mine/mine'),
     
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login/login.vue')
    },
    {
      path: '/login1',
      name: 'login1',
      component: () => import('../pages/Login/login1.vue')
    },
  



  ]
})
