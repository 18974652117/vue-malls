import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '/home',
      component: () => import('../views/home/home.vue')
    },

    {
      path: '/category',
      name: '/category',
      component: () => import('../views/category/category.vue')
    },
    {
      path: '/profile',
      name: '/profile',
      component: () => import('../views/profile/profile.vue')
    },
    {
      path: '/shopcart',
      name: '/shopcart',
      component: () => import('../views/shopcart/shopcart.vue')
    }
  ],
  mode: 'history'
})

export default router
