<template>
  <div class="container">
        <button @click="showText = !showText">Click Me</button><br><br>
        <div v-if="showText">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div><br>
        <label for="">Nhap du lieu</label>
        <input type="text" v-model="message"><br><br>
        <p v-if="showChat">Dang nhap du lieu</p>
        GB: <input type="number" v-model.number="gb">
        MB: <input type="number" v-model.number="mb">
        
  </div>

</template>

<script>

export default {

  data (){
    
    return{
        showText: true,
        message:'',
        showChat:false,
        gb:null,
        mb:null,
    }
  },
  watch:{
    gb(value){
        this.mb = value *1204;
    },
    mb(value){
      this.gb = value /1204;
    },
    message(){
      this.showChat = true;
      
      setTimeout(() => {
        this.showChat = false
      }, 2500);
    }
  },
  methods: {
      
  }
}
</script>

<style lang="scss" scoped>

</style>
