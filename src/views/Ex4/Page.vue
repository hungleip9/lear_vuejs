<template>
  <div class="container">

  <base-layout>
  <template #header>
    <h1>Here might be a page title</h1> 
  </template>
  <Bai4 />
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
        
  </div>

</template>

<script>
import BaseLayout from './BaseLayout.vue'
import Bai4 from './Bai4.vue'
export default {
    components: {
    BaseLayout,
    Bai4
  },
  data (){
     
    return{
    
    }
  },
  methods: {
      
   
  },
  computed: {
       
  },
  watch:{
   
    }
  }
</script>

