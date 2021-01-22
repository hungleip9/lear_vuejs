<template>
  <div class="container">
     <el-button type="primary" loading="true">Primary</el-button>
    <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
  </div>

</template>

<script>

export default {

   components: {
   
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


