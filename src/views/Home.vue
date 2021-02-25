<template>
  <div class="home">
    <HelloWorld />
    <todo />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'
import todo from '@/components/Ex3/B3_1_header.vue'
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
    HelloWorld,
    todo
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
