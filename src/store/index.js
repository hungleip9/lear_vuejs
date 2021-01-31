import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import sanpham from './sanpham/sanpham'
import hoadon from './sanpham/hoadon'
import bai5 from '../views/Admin.vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  getters: {
  },
  mutations: {
  },
  modules: {
    home,
    sanpham,
    hoadon,
    bai5,
  }
})

export default store