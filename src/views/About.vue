<template>
  <div class="about">
    <About msg="Welcome to Your Vue.js App"/>
    <h1>Tong {{totalTime}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState([
        'count',
        'name',
      ]),
      ...mapGetters([
        'doneTodos',
        'doneTodosCount',
        'totalTime'
      ]),
  },
  components: {
    About,
  }
}
</script>
