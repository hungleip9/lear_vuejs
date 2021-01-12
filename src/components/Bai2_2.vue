<template>
  <div class="container">
      <input v-model="keyword" type="text" class="search" @focus="onfocus" :style="{border: divBg}" @keydown.enter="searchName()" placeholder="Tìm kiếm theo tên sản phẩm">
      <button class="clear" v-if="keyword.length>=1" @click="clear">X</button>
      <br>

        <span>
          <div v-if="carts.length > 0 && show == false">
          <table>
            <tr>
              <th>STT</th>
              <th>Sản phẩm</th>
              <th>GIá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              
            </tr>
            <tr v-for="(cart,index) in carts" :key="index">
              <td>{{++index}}</td>
              <td>{{ cart.name }}</td>
              <td>{{ cart.price }}</td>
              <td>{{ cart.quantity }}</td>
              <td v-if="cart.isAvailable == true">Còn hang</td> 
              <td v-else>Hết hàng</td>          
            </tr>
          </table>
          </div>
          <div v-if="show">
          <table>
            <tr>
              <th>STT</th>
              <th>Sản phẩm</th>
              <th>GIá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              
            </tr>
            <tr v-for="(cart,index) in products" :key="index">
              <td>{{++index}}</td>
              <td>{{ cart.name }}</td>
              <td>{{ cart.price }}</td>
              <td>{{ cart.quantity }}</td>
                <td></td>
            </tr>
            
          </table>
          </div>
        
        <div v-else-if="carts.length == 0 && keyword.length > 0">
          <p>Không có dữ liệu</p>
        </div>
        </span>
  </div>

</template>

<script>

export default {

  data (){
    
    return{
        show:true,
        keyword:'',
        message:'',
        divBg:'',
        products:[
          {
            id: 1,
            name: 'iPhone 12 Pro Max Chính Hãng',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
            price: 32990000,
            quantity: 566,
          },
          {
            id: 2,
            name: 'iPhone 12 Chính Hãng (VN/A)',
            image: '',
            price: 21790000,
            quantity: 123,
          },
          {
            id: 3,
            name: 'iPhone 11 Chính hãng',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
            price: 16690000,
            quantity: 0,
          },
          {
            id: 4,
            name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
            price: 12190000,
            quantity: 1023,
          },
          {
            id: 5,
            name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
            image: '',
            price: 26500000,
            quantity: 6,
          }
        ],
        carts: [],
        
    }
  },
  methods: {
      onfocus(){
        this.divBg = '1px solid #76b5ec'   
      },
      
      searchName () {
        this.show = false
        this.carts = []
        this.products.forEach((product) => {
            if(product.name.toLowerCase().includes(this.keyword.toLowerCase())){
              console.log(product)
             this.carts.push(product);
          }
        
        })
      },
      clear(){
        this.keyword = '';
        this.show = true;
      }
  },
  computed: {
      
  },
  watch:{
    }
  }
</script>

<style lang="scss" scoped>
    .container {
      input{
        width: 200px;
        height: 25px;
      }
      .clear{
        border-left: none;
        background: white;
        height: 25px;
      }
      margin: 0 auto;
        table{
          margin: 0 auto;
          text-align: center;
          border: 1px solid black;
          th{
            border-right: 1px solid black;
          }
          td{
            border-right: 1px solid black;
          }
        }
    }
</style>
