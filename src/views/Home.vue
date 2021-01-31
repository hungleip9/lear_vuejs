<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>Count: {{count}}</h3>
    <h3>Name: {{name}}</h3>
    <button @click="onClick">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data(){
    return {
      list: [1,2,3,4,5,6],
      test: 'a'
    }
  },
  computed:{
   ...mapState('home', [
        'count',
        'name',
      ]),
      ...mapGetters('home', [
       
      ])
  },
  mounted(){
    
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapMutations('home', [
        'increment'
      ]),
     onClick () {
        this.increment()
      },
  }
}
</script>
