import Vue from 'vue'
import Router from 'vue-router'

import Testing from '@/components/Testing'
import Item from '@/components/Item'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    }
  ],
  mode: 'abstract'
})

export default router