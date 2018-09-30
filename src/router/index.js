import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/unit/home'
import InfoModel from '@/components/unit/infoModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children: [
            {
              path: '/infoModel',
              name: 'InfoModel',
              component: InfoModel
            }
          ]
        }
      ]
    }
  ]
})
