import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import sanpham from './sanpham/sanpham'
import hoadon from './sanpham/hoadon'
import bai5 from '../views/Admin.vue'
import main from '../views/BaiTapCuoiKhoa/Main.vue'
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
    main,
  }
})

export default store