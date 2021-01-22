<template>
  <div class="container" v-if="show='true'">
    <div class="container">
     <div class="watch" ref="divbg">
        <br> <br>
         <input type="number" v-model="number"><br>
         <button @click="show='false'">click</button>
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
    mounted(){
          this.$refs.divbg.style.background = 'blue' 
      },
   
    updated(){
          this.$refs.divbg.style.background = 'red'
      },
    destroyed(){
          console.log("123");
      },
  methods: {
      showas(){
          this.show = 'flase'
      }
   
  },
  computed: {
       
  },
  watch:{
      
  },
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
