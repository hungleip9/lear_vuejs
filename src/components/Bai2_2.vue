<template>
  <div class="contain">
    <!-- <div class="search">
        <input type="text" placeholder="Tim kiem theo ten san pham" class="search-product" @keydown.enter="submit($event.target.value)" @focus="onChange()" :style="{border: changeBorder}" @blur="beforeChange()" @input="changeValue($event.target.value)" v-model="resultProduct">
        <img :src="searchCancel" :style="{width:'16px', height:'20px', display:imgCancel}" class="cancel-button" @click="clearInput()">
    </div> -->
    <div class="panel-body">
        <table class="table-latitude">                
            <thead >
                <th>STT</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
                <th>Action</th>
            </thead>
                
            <tbody >             
                <tr v-for="(product,index) in products" :key="index" >                      
                  <th>{{product.id}}</th>
                  <td v-if="product.image != '' "><img :src="product.image" :style="{ width:'40px', height:'40px', marginLeft:'-12px'}">{{product.name}} </td>
                  <td v-else><img :src="noImage" :style="{ width:'40px', height:'40px', marginLeft:'-12px'}">{{product.name}}</td>
                  <td>{{formatCurrency(product.price)}} đ</td>
                  <td>{{product.quantity}}</td>
                  <td v-if="product.quantity != 0" class="stock">Còn hàng</td>
                  <td v-else class="out-stock">hết hàng</td>
                  <td><button class="add-cart" @click="addCart(product)">Thêm vào giỏ</button></td>
                </tr>
                    
            </tbody>
  
        </table>
    </div>
    <div class="info-wrap">
        <div class="cart-name">
          <b><p>Giỏ hàng</p></b>
        </div>
        <div v-if="carts.length == 0 " class="empty-product">
          <p>Không có sản phẩm nào được thêm vào giỏ</p>
        </div>
        <div v-else>
          <div class="info-product" v-for="(product,index) in carts" :key="index">
            <tr>
              <td v-if="product.image != '' "><img :src="product.image" :style="{ width:'40px', height:'40px'}">{{product.name}} </td>
              <td v-else><img :src="noImage" :style="{ width:'40px', height:'40px'}">{{product.name}}</td>           
              <td><input type="number" class="quantity" value="1" @click="number($event.target.value)" v-model="number"></td>
              <td><button class="btn-clear" @click="removeCart(product)">Xóa</button></td>
            </tr>
            <tr>
              <td class="price">{{formatCurrency(product.price)}} đ</td>
            </tr>
          </div>
          
        </div>
        <div class="total-price">
          <p>Tổng tiền: {{formatCurrency(totalPrice)}} đ</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'L2Excersise2',
  data () {
      return {
          products : [
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
        resultProduct:'',        
        noImage:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX09PTh4eH19fXg4ODk5OTw8PDs7Ozq6uru7u7n5+dZKxXMAAAELUlEQVR4nO2dWXKtMAwFwQMX9r/hB9RNMOARhCTyTv/kIxVQl4kHYZmuAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAsZ03o9eA6OfwyH360bXWz30kyd2HHvbq8LaibQdJ2V+C7Yf6RSdQsEZOxApGqWCsyJNK5qPVsEZCsHOS1tksBNFI2rsZTY8gaG0QxaCRjRj0ITS4/wvW0judguaKbjaID1f+xLEZG8/psZtV6OeKF3GbH2DHW9fbDN0WgTn/j0wvBtVYEjSM9MAwxZgKAMMW4ChDLyGxoQ/eGA0NMYPk3O9c9PH80nyGZo1A/e9l3WEiZM8DxmeZm3GH/Ib1jFNXZna0AzntTFZcigPj2E8f2M/HIoshqkEFYsih+Fu7b9XZOhvWNow4bdw85YVMBjmkqg0Kb4sHG2YaUKaFF+W5w3zefDnO5vnR/wwPxXh8YwOw1Oaz4Pbmzct8ryhLxhe+EdsivRxw/RgePW2821a/uZ5w8ILt/auZp7Ct8Qqb9g6/17XKA3BKnhK227yswirjvZtPc22yqwN912jxW6bQGW87xrx93mCuoBfNWs7JkKqIuaYeWcf04brn3ey1ITMsXrK7F9oWD1Ft+pUxPyeFXB8L1I5aJYsRnKbTcM9E5utyleQzUTVz2eSu8mKYb8km5jbLleI+xUZ4cJ+wHzgr8jqFzY85iNnfPe0vJn5uVff8mamuKMzGzrn27Xu9+3a4Bu2JddsWc3Erv4NaeWe3HTw6t9yV246Tkev3bB6V3UyfOWGDdvGU/HrNmzbFx8X0GzYvPE/asA14l+hubIhqqC4DS+UbsQc9Bpeq005S2g1vFx8c7LQani5uuikIWhohnR5wI3yqaOHnOG8ZLQpxVv1YYd1p5jhuiZOKN4sgNsrShl+F/0xxfsVfjtFoRE/yGqcfkdQwhgqyrRhmLY5tiJJjWbwvkfEcJeXOjyoNEWoVrYND4m3UJGqyla2DU+ZxUCRqoxY1DCWOv3pbsjqpCUNo4LfVqQrBBc0jAquioaylF/OMCG4KlKW8j9vmBjxk4LUSLUhm6CUIZ+gkCGjoIwhp6CIIaughCGvoIAhsyC/Ibcg+4jPLsjdhvyCzIYCgryGEoK8hoV93u83lDn+i9VQ4iGFIQwrDN2fN/z7bQhDGMIQhjCEYdnwvxrxPyKnljIadn6QgNOwMxKwGgoDwxZgKAMMW4ChDE/N2kiCoyA4eYTgPO/t/PPluyc6COrICc5kDybZ1jodhPP+u4LFg1qkofjXyR9jIgzFaaKl84Rkoen9FDci1Tmb0h5JqM6gNFo7m2R5zgVFbd8kW5nHZzJOx0MowNqhHHiL4+h2H7ARZvl4HvUHAtfD1yfpycyX6TPSfwCxE8o+JXhADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs/ANyGFT0fw3sTAAAAABJRU5ErkJggg==',
        searchCancel:'data:image/png;base64,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',     
        carts: [],
        character: false,
        number:'1',
        totalPrice:'0'
        
      }
  },
  methods: {
    formatCurrency: function(value) {
      let val = (value/1).toFixed(2).replace('.', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    
    addCart: function(product) {
    
      if(product.quantity == 0) {
        alert('Sản phẩm hết hàng')
      } else{
        this.carts.push(product);
        this.totalPrice = this.carts.reduce((total,item)=>{
          return total + this.number * item.price;
        },0 );
      }
      
    },
    removeCart: function(product) {
      this.carts.splice(this.carts.indexOf(product));
    }
  
  },
  
  computed: {
    //  total () {
    //    let result = 0;
    //    this.carts.map((product) => {
    //      result = product.price * this.number;
    //    });
    //    return result;
    //  }
  },
  // watch: {
  //   number(value) {
  //     alert(value)
  //   }
  // }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$background: #efefef;
$lfs-blue: #006ac6;
$lfs-yellow: #fab700;
$lfs-grey: #75787b;
$lfs-thead:#b4e5ea;
.contain {
    width: 50%;
    height: 383px;
    
}

.panel-body{
    border: 1px solid black;
}
.search {
    width: 20%;
    margin-bottom: 10px;
    .search-product {
        height: 30px;
        position: relative;
       
    }
    .cancel-button {
      position: absolute;
      top: 68px;
      left: 164px;
      cursor: pointer;
    }
}
.info-wrap {
    margin-top: -500px!important;
    margin-left: 770px;
    width: 564px;
    // height: 607px;
    // border: 1px solid black;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    margin-top: -457px;
    .info-product {
      border: 1px solid black;
      height: 78px;
      .price {
        text-align: center;
      }
      .quantity {
        width: 69px;
        height: 20px;
        margin-left: 65px;
      }
      .btn-clear{
        background-color: #ed4a5e;
        color: whitesmoke;
        width: 69px;
        height: 27px;
        margin-left: 10px;
        border-radius: 5px;
      }
    }
    .total-price {
      border-bottom: 1px solid black;
      margin-top: 313px;
      color: red;
    }
    .empty-product {
      text-align: center;
      margin-top: 104px;
    }
}
.table-latitude {
    width: 100%;
    border-collapse: collapse;
    thead {
        // border-top: 2px solid $lfs-yellow;
        // border-bottom: 2px solid $lfs-yellow;
        border: 1px solid black;
        background-color: $lfs-thead;
        th {
            text-transform: uppercase;
            text-align: center;
            padding: 10px;
            // color: $lfs-blue;
            border: 1px solid black;
        }
    }
    tbody {
        tr {
            border-bottom: 1px solid #F1F1F1;
            
            border: 1px solid black;
            td {
                padding: 10px;
                border: 1px solid black;
            }
            .stock {
                color: green;
            }
            .out-stock{
                color: red;
            }
            th {
                padding-left: 10px;
                border: 1px solid black;
            }
            .add-cart {
              background-color: #1362f3;
              color: white !important;
              width: 85px;
              cursor: pointer;
              border-radius: 5px;
            }
        }

    }
    .text-center {
        width: 418%;
        text-align: center;
        height: 100px;
    }
   
}
</style>