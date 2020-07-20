import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import Item from '@/components/Item'

Vue.use(Router)

let router = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/item',
      name: 'item',
      component: Item,
      meta:{
        requiresAuth: true
      }
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  }else{
    next()
  }
})

export default router