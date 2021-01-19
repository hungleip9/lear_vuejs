<template>
  <div class="container">
  
      <div class="loginWrap">
          <form action="" @submit.prevent="SubmitForm">
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
         </form>
      </div>
   
    <div class="infoWrap">
      <div class="infoLabel">
        Xin Chào: {{names}} <br>
        Ngày sinh: {{dates}} <br>
        Số điện thoại: {{phones}} <br>
        FaceBook:<a :href="facebooks" :target="target">{{facebooks}}</a>
        <!--        <img :style="{width: '100px', height: '50px'}" :src="imgUrl" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data (){
    return{
      name: '',
      date: '',
      phone: '',
      facebook: '',
      imgUrl: 'data:image/jpeg;base64,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',
      target:'_blank', //mo ra 1 trang khac trong tab moi
      names:'',
      dates:'',
      phones:'',
      facebooks:'',
    }
  },
  methods: {
    // changeUserName (value){
    //   this.name = value
    // },
    onClick(){
      this.names = this.name;
      this.dates = this.date;
      this.phones = this.phone;
      this.facebooks = this.facebook;
    },
    clear(){
      this.name = "";
      this.date = "";
      this.phone = "";
      this.facebook = "";
    },
    SubmitForm(e){
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
//@mixin colorVsFont {
//  color: #fff;
//  font-size: 50px;
//}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  //@include colorVsFont;


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

  .infoWrap {
    background: #fff;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 357px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 24px;

    .infoLabel {
      font-weight: bold;
      color: #00AAAA;
      a{
        text-decoration: none;
        color: blue;
      }
    }
  }
}
</style>
