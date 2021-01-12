<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <Bai1_2 />
    <Bai1_1 />
    <Bai1_3 />
    <Test />
    <Bai2 />
    <Bai2_1 />
    <Bai2_2 />
  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Bai1_2 from './components/Bai1_2.vue'
// import Bai1_1 from './components/Bai1_1.vue'
// import Bai1_3 from './components/Bai1_3.vue'
// import Test from './components/Test.vue'
// import Bai2 from './components/Bai2.vue'
import Bai2_1 from './components/Bai2_1.vue'
// import Bai2_2 from './components/Bai2_2.vue'


export default {
  name: 'App',
  components: {
    // Bai1_2,
    // Bai1_1,
    // Bai1_3,
    // Test,
    // Bai2,
    Bai2_1
    // Bai2_2
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
