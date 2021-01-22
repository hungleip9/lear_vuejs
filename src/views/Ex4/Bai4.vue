<template>
  <div class="container">
    <div class="container">
     <div class="watch" ref="divbg">
        <br> <br>
         <input type="number" v-model="number">
     </div>
  </div>
        
  </div>

</template>

<script>

export default {

  data (){
    
    return{
        divBg:'',
        number:'',
    }
  },
  methods: {
      
   
  },
  computed: {
       
  },
  watch:{
    number(value) {
       
         if(value <= 10 && value >= 0) {
          this.$refs.divbg.style.background = 'gray'       
        }
        if(value < 30 && value > 11) {
            this.$refs.divbg.style.background = 'green'  
        }
        if(value < 50 && value > 31) {
            this.$refs.divbg.style.background = 'blue' 
        }
        if(value < 70 && value > 51) {
            this.$refs.divbg.style.background = 'pink'
        }
        if(value < 100 && value > 71) {
            this.$refs.divbg.style.background = 'red'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    .watch{
        border: 1px solid black;
        width: 300px;
        height: 500px;
    }
    
  }
</style>
