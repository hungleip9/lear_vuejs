<template>
  <div class="container">
    <div class="productWrap">
      <div class="cartWrap">
        <h3 class="headCart">Giỏ hàng</h3>
        <table v-if="carts.length > 0" class="listCart">
          <thead>
          <tr>
            <th width="70%"></th>
            <th width="15%"></th>
            <th width="15%"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in carts" :key="index">
            <td class="infoItem">
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
              <div class="detailItem">
                <p class="productName">{{ product.name }}</p>
                <p>{{ product.price.toLocaleString('vi-VI') }} đ</p>
              </div>
            </td>
            <td><input type="number" class="quantityInput" min="0"
                       @keydown.enter="onchange(product.id,$event.target.value)"
                       :value="product.quantity"></td>
            <td><input type="button" class="clearButton" @click="clear(product.id)" value="Xóa"></td>
          </tr>
          </tbody>
        </table>
        <div v-else class="cartNull">
          <div>Không có sản phẩm nào được thêm vào giỏ</div>
        </div>
        <div class="cartTotal">
          <div class="total">Tổng tiền : {{ total.toLocaleString('vi-VI') }} đ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import tableCart from './tableCart'
export default {

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
    clear(id) {
      this.clear()
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

    },
    ...mapMutations([
         'clear'
      ]),
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
    tableCart,
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;

  .productWrap {
    width: 100%;
    display: flex;
    .cartWrap {
      width: 500px!important;
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