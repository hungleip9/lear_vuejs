<template>
   <div class="loginWrap">
        <h1>Todo App</h1>
        <input type="text" v-model="keyword" placeholder="Nhập công việc và nhấn enter để thêm" @keydown.enter="createWork()">
      </div>
</template>

<script>

export default {

  data (){
    return{
        keyword:'',
        carts: [],
    }
  },
  methods:{
    createWork () {
        this.carts = []    
        this.carts.push(this.keyword)
         this.$emit('onCreateWork',
        {
            keyword: this.keyword,
            cart: this.carts
        })
        this.keyword=''
    }
  }
}
</script>

<style lang="scss" scoped>
.loginWrap {
    background: #f5f5f5;
    
    padding: 0;
    height: 50%;
    width: 100%;
    border-radius: 10px 10px 0 0;
    h1{
        color: #63cd75;
    }
    input{
        width: 80%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #cbcdd0;
    }
}
</style>
