import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      // count: 1,
      defaulImg: "https://www.tibs.org.tw/images/default.jpg",
      value: "",
      products: [
        {
          id: 1,
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          id: 2,
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          id: 3,
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          id: 5,
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 6,
          isAvailable: true,
        }
      ],
      carts: [],
      isNotData: false,

      name: '',
      price: '',
      quantity: '',
      nameErrorMsg: '',
      priceErrorMsg: '',
      quantityErrorMsg: '',
      products: [],
      product: {},
  },
  getters: {
    doneTodos: state => {
        return state.todos.filter(todo => todo.time)
      },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      },
    totalTime: state => {
        let total = 0;
        state.todos.forEach( item => {
            total += item.time;
        })
        return total;
    },
    getTodoByText: (state) => (text) => {
        return state.todos.find(todo => todo.text.includes(text));
    }
  },
  mutations: {
    increment (state) {
        state.count+=5
      },
    deleteTodo (state, index) {
        state.todos.splice(index, 1)
      },
    clear(state, id) {
      state.carts = state.carts.filter((cart) => {
        return cart.id != id;
      });
    }  
    // Khai báo mutations
  }
})

export default store