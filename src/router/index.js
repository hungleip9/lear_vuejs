import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Ex4/Bai1.2/NewsDetailPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../components/Orders.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../components/Products.vue')
  },
  {
    path: '/dangky',
    name: 'Dangky',
    component: () => import('../views/DangKy.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
