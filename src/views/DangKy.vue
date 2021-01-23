<template>
  <div class="login">

    <el-card>
      <span style="font-weight: bold;font-size: 25px">LẤY LẠI MẬT KHẨU</span><br><br>
      <span>Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.</span><br>
      <el-input
          style="padding: 10px 0;"
          placeholder="Email"
          v-model="email">
      </el-input>
      <el-button type="primary" :plain="true" @click="open2" style="color: white">GỬI EMAIL</el-button>
      <br>

      <el-button class="back" @click="back"><i class="el-icon-back"></i>
        Trở về trang đăng nhập
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: '',
    }
  },
  methods: {
    open2() {
      if(this.email != ''){
        this.$message({
          message: 'Gửi email thành công.',
          type: 'success'
        });
      }else{
        this.$message.error('Email không được trống.');
      }

    },
    back(){
      this.$router.replace({ name: "Login" });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right,  #0595E7, #7ECFC7);
  height: 700px;
  .el-card {
    width: 29%;
    span{
      text-align: left!important;
    }
  }
}
.back{
  background: none!important;
  color: #0080dd;
  border: none;
}
.el-button {
  width: 100%;
  background-color: #0080dd;
  font-size: 14px;
  line-height: 18px;
}
</style>
