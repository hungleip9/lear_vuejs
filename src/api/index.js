import axios from 'axios'
import store from "../store";
import router from "../router";
// Lấy ra các biến cần thiết: base url, token
const baseUrl = process.env.VUE_APP_BASE_URL;
const token = localStorage.getItem('access_token');
// Tạo instance của axios
export const apiAxios = axios.create({
  baseURL:`${baseUrl}/api`,
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
    common: {
      'Authorization': `Bearer ${token}`
    }
  }
})
// Xử lý logout khi response 401
apiAxios.interceptors.response.use(undefined, (error) => {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && router.currentRoute.name !== 'Login') {
      store.commit('auth/updateLoginStatus', false)
      store.commit('auth/updateAuthUser', {})
      localStorage.removeItem('access_token')
      return router.push({name: 'Login'})
    }
  }
})
// Khai báo các request sử dụng trong hệ thống
export default {
  getAuthUser () {
    return apiAxios({
      method: 'get',
      url: '/auth/me'
    })
  },
  register (data) {
    return apiAxios({
      method: 'post',
      url: 'auth/register',
      data: data
    })
  },
  login (data) {
    return apiAxios({
      method: 'post',
      url: 'auth/login',
      data: data
    })
  },
}