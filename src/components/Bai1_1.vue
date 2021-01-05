<template>
  <div class="container">

    <form action="" @submit.prevent="SubmitForm">
      <div class="loginWrap">
        <div class="inputWrap">
          <div class="inputLabel">Tên Nhập Tiêu Đề</div>
          <input type="text" v-model="title">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Nhập Nội Dung</div>
          <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
        </div>
      </div>
    </form>

    <div class="infoWrap">
      <div class="infoLabel">
        <h2>{{title}}</h2><br>
        <div v-html="content"></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {

  data (){
    return{
      title:'Zent Coding School',
      content:'Happy Class',
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

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
    height: 500px;
    width: 400px;
    border-radius: 20px;

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
      textarea{
        width: 292px;
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
    height: 500px;
    width: 400px;
    display: flex;

    justify-content: center;
    margin-left: 24px;
    border-radius: 20px;

    .infoLabel {

    }
  }
}
</style>
