<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>Count: {{count}}</h3>
    <h3>Name: {{name}}</h3>
    <h3>doneTodos: {{doneTodos}}</h3>
    <h3>doneTodosCount: {{doneTodosCount}}</h3>
    <h3>Tong: {{totalTime}}</h3>
    <h3>getTodoByText: {{getTodoByText('nha')}}</h3>
    <button @click="changeCount">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState([
        'count',
        'name'
      ]),
      ...mapGetters([
        'doneTodos',
        'doneTodosCount',
        'totalTime',
        'getTodoByText',
      ]),
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapMutations([
         'increment'
      ]),
    changeCount () {
        this.increment()
      }
  }
}
</script>
