<template>
  <div class="container">
      <div class="inputForm">
          <h2>Sản phẩm</h2><br>
          <b>Tên sản phẩm</b><span style="color: red">(*)</span><br>
          <input v-model="name" type="text" placeholder="Nhập tên sản phẩm"><br>
          <p class="error" style="color:red" :style="{display: noneTen}">Tên sản phẩm không được để trống</p><br>
          <b>Đơn giá</b><span style="color: red">(*)</span><br>
          <input v-model="gia" type="text" placeholder="Nhập đơn giá sản phẩm"><br>
          <p class="error" style="color:red" :style="{display: noneGia}">Giá sản phẩm không được để trống</p><br>
          <b>Số lượng</b><span style="color: red">(*)</span><br>
          <input v-model="soluong" type="text" placeholder="Nhập số lượng sản phẩm"><br>
          <p class="error" style="color:red" :style="{display: noneSoLuong}">Số lượng sản phẩm không được để trống</p><br>
          <button class="submit" @click="submit()">Tạo mới</button>
          <button class="clear" @click="clear()">Hủy</button>
      </div>
  </div>
</template>

<script>

export default {

  components: {
    
  },
  data() {
    return {
        noneTen:'none',
        noneGia:'none',
        noneSoLuong:'none',
        name:'',
        gia:'',
        soluong:'',
    }
  },
  methods: {
      submit(){
          if(this.name == ''){
              this.noneTen = ''
          }else{
              this.noneTen = 'none'
          }
          if(this.gia == '' ){
              this.noneGia = ''
          }else{
              this.noneGia = 'none'
          }
          if(this.soluong == '' ){
              this.noneSoLuong = ''
          }else{
              this.noneSoLuong = 'none'
          }
      },
      clear(){
          this.name = '',
          this.gia = '',
          this.soluong = ''
      }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
    .inputForm{
        border: 1px solid black;
        width: 400px;
        height: 600px;
        text-align: left;
        padding-left: 20px;
        margin-top: -100px;
        .error{
            font-size: 15px;
        }
        h2{
            color: blue;
        }
        input{
            width: 80%;
            height: 30px;
        }
        button{
           width: 80px;
           height: 50px;
        }
        .submit{
            color: white;
            background: blue;
            margin-left: 170px;
        }
    }
}
</style>