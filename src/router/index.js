import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('../views/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'admin'},
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {layout: 'admin'},
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'admin'},
      component: () => import('../views/History.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'admin'},
      component: () => import('../views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'admin'},
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'admin'},
      component: () => import('../views/Record.vue')
    }
  ]
})
