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
      path: '/banners',
      name: 'banners',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Banners.vue')
    },
    {
      path: '/cinema',
      name: 'cinema',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Cinema.vue')
    },
    {
      path: '/cinema-edit/:cinemaIndex?',
      props: true,
      name: 'cinema-edit',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/CinemaEdit.vue')
    },
    {
      path: '/cinema-hall/:cinemaIndex?/:hallIndex?',
      props: true,
      name: 'cinema-hall',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/CinemaEditHall.vue')
    },
    {
      path: '/films',
      name: 'films',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Films.vue')
    },
    {
      path: '/film/:filmIndex?',
      props: true,
      name: 'film-edit',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/FilmEdit.vue')
    },
    {
      path: '/news',
      name: 'news',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/News.vue')
    },
    {
      path: '/news-edit/:newsIndex?',
      name: 'news-edit',
      props: true,
      meta: {layout: 'admin'},
      component: () => import('../views/admin/NewsEdit.vue')
    },
    {
      path: '/pages',
      name: 'pages',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Pages.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Statistics.vue')
    },
    {
      path: '/stock',
      name: 'stock',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Stock.vue')
    },
    {
      path: '/stocks-edit/:stocksIndex?',
      name: 'stocks-edit',
      props: true,
      meta: {layout: 'admin'},
      component: () => import('../views/admin/StockEdit.vue')
    },
    {
      path: '/users',
      name: 'users',
      meta: {layout: 'admin'},
      component: () => import('../views/admin/Users.vue')
    }
  ]
})
