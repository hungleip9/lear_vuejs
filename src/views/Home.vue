<template>
  <div class="home">
    <h1>Welcome! {{authUser.name}}</h1>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    computed: {
      ...mapState('auth', ['authUser'])
    }
  }
</script>