import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/bai3_1',
    name: 'Bai3_1',
    component: () => import('../views/demoVuex.vue')
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
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/editUser',
    name: 'EditUser',
    component: () => import('../components/EditUser.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../components/Ex7/tableCart.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../components/Ex7/Exercise.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
