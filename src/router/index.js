import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicLayout from '@/components/layout/BasicLayout'
import Login from '@/components/layout/Login'

Vue.use(Router)
Vue.use(Vuex)
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
      component: BasicLayout,
      children: [{
        path: '',
        component: HelloWorld
      }, {
        path: 'detail',
        component: HelloWorld
      }]
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})