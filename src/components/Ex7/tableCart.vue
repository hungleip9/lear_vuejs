<template>
  <div class="container">
    <div class="productWrap">
      <div class="tableWrap">
        <table id="tableCart">
          <thead>
          <tr>
            <th width="30px">STT</th>
            <th width="150px">Sản phẩm</th>
            <th width="70px">Giá</th>
            <th width="50px">Số lượng</th> 
            <th width="50px">Trạng thái</th>
            <th width="13%">Hành động</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ index + +1 }}</td>
            <td class="productName">
              <img
                  v-if="product.image.length > 0"
                  :src="product.image"
                  alt=""
              />
              <img
                  v-else
                  alt=""
                  :src="defaulImg"
              />
              {{ product.name }}
            </td>
            <td>{{ product.price.toLocaleString("vi-VN") }} đ</td>
            <td>{{ product.quantity }}</td>
            <td
                :class="{ redColor: !product.isAvailable }"
                class="status"
            >
              <span v-if="!product.isAvailable">Hết hàng</span>
              <span v-else>Còn hàng</span>
            </td>
            <td><input type="button" class="inputAddCart" @click="addProduct(product.id)" value="Thêm vào giỏ"></td>
          </tr>
          </tbody>


        </table>
      </div>
      <cartWrap />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cartWrap from './cartWrap'
export default {
  name: "Cart2",
  data() {
    return {
      
    };
  },
  methods: {    
    addProduct(id) {
      let newProduct = [];
      let isCart = false;
      this.products.forEach((product) => {
        if (product.id == id) {
          newProduct = Object.assign({}, product);
        }
      });

      if (newProduct.quantity > 0) {
        this.carts.forEach((cart) => {
          if (newProduct.id == cart.id) {
            if (newProduct.quantity > cart.quantity) {
              cart.quantity++;
            } else {
              alert('Sản phẩm hết hàng')
            }
            isCart = true;
          }
        })

        if (!isCart) {
          newProduct.quantity = 1;
          this.carts.push(newProduct);
        }
      } else {
        alert('Sản phẩm hết hàng');
      }
    },

    onchange(id, value) {
      let item = this.products.filter((item) => {
        return item.id == id;
      })

      if (item[0].quantity >= value) {
        if (value == 0) {
          this.carts = this.carts.filter((cart) => {
            return cart.id != id;
          });
        }

        this.carts.forEach((cart) => {
          if (cart.id == id) {
            cart.quantity = value;
          }
        })
      } else {
        alert('Sản phẩm hết hàng')
      }

    }
  },
  computed: {
    total() {
      let total = 0;

      this.carts.forEach((cart) => {
        total = total + +cart.quantity * cart.price;
      });

      return total;
    },
    ...mapState([
        'defaulImg',
        'value',
        'products',
        'carts',
        'isNotData',
    ]),
  },
  components:{
      cartWrap,
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;

  .productWrap {
    width: 100%;
    display: flex;

    .tableWrap {
      width: 55%;
      margin: 0 50px;

      #tableCart {
        border-collapse: collapse;
        border: 1px solid #ddd;
        width: 100%;

        th {
          background-color: #ecf2fd;
          border: 1px solid #ddd;
          padding: 15px;
        }

        td {
          border-left: 1px solid #ddd;
          padding: 15px;

          img {
            width: 50px;
          }
        }

        .status {
          color: #79d189;
        }

        .redColor {
          color: #f18083 !important;
        }

        .productName {
          display: flex;
          align-items: center;
          color: #5591e0;

          img {
            margin-right: 10px;
          }
        }

        .inputAddCart {
          padding: 0 15px;
          height: 35px;
          border-radius: 3px;
          color: #fff;
          border: unset;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          background-color: #0080dd;
        }
      }
    }

    .cartWrap {
      width: 32%;
      border: 1px solid #ddd;
      height: 600px;
      position: relative;

      .cartTotal {
        position: absolute;
        right: 30px;
        bottom: 30px;

        .total {
          font-weight: bold;
          color: red;
          font-size: 18px;
        }
      }

      .cartNull {
        position: absolute;
        top: 25%;
        left: 20%;
      }

      .headCart {
        text-align: left;
        margin-left: 25px;
      }

      table {
        border-collapse: collapse;
        margin: 0 auto;

        th {
        }

        tbody {
          tr {
            border-bottom: 1px solid #ddd;
            margin: 0;

            .infoItem {
              display: flex;

              img {
                float: left;
                margin-right: 10px;
              }

              .detailItem {
                line-height: 30px;

                p {
                  margin: 0;
                  text-align: left;
                }

                .productName {
                  font-weight: bold;
                  width: 250px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  font-size: 15px;
                }
              }
            }

            td {
              padding: 15px 0px;

              img {
                width: 50px;
                height: auto;
              }

              .quantityInput {
                padding: 10px;
                outline: none;
                border: 1px solid #ddd;
                width: 30px;
                margin-right: 5px;
              }

              .clearButton {
                width: 100%;
                height: 35px;
                border-radius: 3px;
                color: #fff;
                border: unset;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
                background-color: #dd1a00;
              }
            }
          }
        }
      }
    }
  }
}
</style>