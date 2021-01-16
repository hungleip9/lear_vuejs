<template>
  <div class="container">
      <div class="content">
        <Header @onCreateWork="getData" />
        <Content :keywords="keyword" :carts="cart" />
      </div>
    
  </div>

</template>

<script>
import Header from './3_1_header'
import Content from './3_1_content'
export default {
  components:{
    Header,
    Content,
  },
  data (){
    return{
        keyword:'',
        cart:'',
    }
  },
  methods: {
    getData(data) {
      this.keyword = data.keyword
      this.cart = data.cart
    },
  },
}
</script>

<style lang="scss" scoped>
     .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    background: #0580dd;
    .content {
        width: 500px;
        height: 600px;
        background: white;
        border-radius: 10px;
    }
  }
</style>
