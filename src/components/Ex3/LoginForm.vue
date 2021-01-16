<template>
   <div class="loginWrap">
          
        <div class="inputWrap">
          <div class="inputLabel">Tên đăng nhập</div>
          <input type="text" v-model="name">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Ngày sinh</div>
          <input type="text" v-model="date">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Số điện thoại</div>
          <input type="text" v-model="phone">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Link FaceBook</div>
          <input type="text" v-model="facebook">
        </div>
        <button class="btnSave" style="background: #0080dd!important;" @click="onClick">Save</button>
        <button class="btnClear" style="background: #e66e6e!important;" @click="clear">Clear</button>
        
      </div>
</template>

<script>

export default {

  data (){
    return{
      name:'',
      date:'',
      phone:'',
      facebook:'',
    }
  },
  methods:{
      onClick(){
        this.$emit('onSubmitLogin',
        {
            name: this.name,
            date: this.date,
            phone: this.phone,
            facebook: this.facebook,
        })   
    },
    clear(){
      this.name='',
      this.date='',
      this.phone='',
      this.facebook='',
      this.$emit('onSubmitClear',
      {
          name:'',
          date:'',
          phone:'',
          facebook:'',
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>
      .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: auto;
    width: 300px;

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
        //@extend .loginWrap;

      }

      input {
        width: 292px;
        height: 30px;
      }
    }

    button {
      width: 30%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }
</style>
