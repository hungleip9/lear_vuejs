export default {
    namespaced: true,
    state: {
        count: 3,
        name: 'hungle',
    },
    getters: {
        
    },
    mutations: {
        increment (state) {
            state.count++
          }
    },
  }