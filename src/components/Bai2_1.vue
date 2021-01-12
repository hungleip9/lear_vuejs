<template>
  <div class="container">
    <div class="inputSearch" :style="{border: divBg}" >
    <img src="data:image/png;base64,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">
      <input v-model="keyword" type="text" class="search" @focus="onfocus" @keydown.enter="searchName()" placeholder="Tìm kiếm theo tên sản phẩm">
      <button class="clear" v-if="keyword.length>=1" @click="clear">X</button>
      </div>
      <br>

        <span>
          <div v-if="carts.length > 0 && show == false">
          <table>
            <tr>
              <th style="width:70px">STT</th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              
            </tr>
            <tr v-for="(cart,index) in carts" :key="index">
              <td>{{++index}}</td>
              <td class="productName"><img :src="cart.image"> {{ cart.name }}</td>
              <td>{{ cart.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
              <td>{{ cart.quantity }}</td>
              <td v-if="cart.isAvailable == true" style="color: #86d383;">Còn hàng</td> 
              <td v-else style="color: #ef646f">Hết hàng</td>          
            </tr>
          </table>
          </div>
          <div v-if="show">
          <table>
            <tr>
              <th style="width:70px">STT</th>
              <th>Sản phẩm</th>
              <th style="width:100px;">Giá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              
            </tr>
            <tr v-for="(cart,index) in products" :key="index">
              <td>{{++index}}</td>
              <td class="productName"><img :src="cart.image"> {{ cart.name }}</td>
              <td>{{ cart.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
              <td>{{ cart.quantity }}</td>
              <td v-if="cart.isAvailable == true" style="color: #86d383;">Còn hàng</td> 
              <td v-else style="color: #ef646f">Hết hàng</td>      
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
            name: 'iPhone 12 Pro Max Chính Hãng',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
            price: 32990000,
            quantity: 566,
            isAvailable: true
          },
          {
            name: 'iPhone 12 Chính Hãng (VN/A)',
            image: '',
            price: 21790000,
            quantity: 123,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Chính hãng',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
            price: 16690000,
            quantity: 0,
            isAvailable: false
          },
          {
            name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
            price: 12190000,
            quantity: 1023,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
            image: '',
            price: 26500000,
            quantity: 45,
            isAvailable: true
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
      .inputSearch{
        position: relative;
         width: 310px;
          height: 28px;
          border:1px solid black;
          text-align: center;
          margin: 0 auto;
          
        img{
          position: absolute;
          width: 25px;
          height: 20px;
          bottom: 3px;
        }
        input{
          
          width: 300px;
          height: 25px;
          border:none;
        }
        .clear{
          border-left: none;
          background: white;
          height: 25px;
        }
      }
      margin: 0 auto;
        table{
          width: 700px;
          height: 300px;
          margin: 0 auto;
          text-align: center;
          border: 1px solid black;
          border-collapse: collapse;
          tr{
            padding:0;
            margin: 0;
            th{
              padding:0;
              border-right: 1px solid black;
              border-bottom: 1px solid black;
              background: #f2f6fe;
            }
            td{
              border-right: 1px solid black;
              padding:0;
              img{
              width: 30px;
              height: 30px;
             }
            
            }
          }
          .productName{
              text-align: left!important;
              color:#57aced;
              padding-left: 10px;
            }
        }
    }
</style>
