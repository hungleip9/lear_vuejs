<template>
  <div class="container">
      <div class="content">
          <div class="ProductForm">
              <ProductForm @onCreateWork="getData" />
          </div>
          <div class="ProductList">
              <ProductList :keywords="keyword" :carts="cart" />
          </div>
          <div class="clear"></div>
        
        
      </div>
    
  </div>

</template>

<script>
import ProductForm from './ProductForm'
import ProductList from './ProductList'
export default {
  components:{
    ProductForm,
    ProductList,
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
    .content {
        width: 100%;
        height: 700px;
        background: white;
        .ProductForm{
            width: 40%;
            height: 100%;
           float: left;
        }
        .ProductList{
            width: 60%;
            height: 100%;
            float: right;
        }
        .clear{
            clear: both;
        }
    }
  }
</style>
