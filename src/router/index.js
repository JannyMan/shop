import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import index from '@/components/index/index'
import speak from '@/components/speak/speak'
import shopCar from '@/components/shopCar/shopCar'
import my from '@/components/my/my'
import boke from '@/components/boke/boke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/speak',
      name: 'speak',
      component: speak
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/boke',
      name: 'boke',
      component: boke
    }
  ]
})
