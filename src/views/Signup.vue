<template>
  <div class="login">
    <el-card>
      <el-image
        style="width: 51% !important; margin-bottom: 24px"
        src="/logo-login.2d516aef.png"
        fill>

      </el-image>
      <el-input
            style="padding: 10px 0;"
            placeholder="Name"
            v-model="name">
        </el-input>
        <el-input
            style="padding: 10px 0;"
            placeholder="Email"
            v-model="email">
        </el-input>
        <el-input
            type="password"
            style="padding: 10px 0;"
            placeholder="Mật khẩu"
            v-model="pw">
        </el-input>
        <el-input
            type="password"
            style="padding: 10px 0;"
            placeholder="Nhập lại mật khẩu"
            v-model="rpw">
        </el-input>
        <el-button type="primary" :plain="true" @click="signup" :target="target" style="color:white">ĐĂNG KÝ</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            name: '',
            email: '',
            pw: '',
            rpw: '',
            target:'_blank'
        }
    },
    methods: {
        signup() {
            if (this.name != '' && this.email != '' && this.pw != '' && this.rpw != '' && this.pw == this.rpw) {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "Admin" });
            }
            else if(this.name == ''){
            this.$message.error('Tên không được trống.');
            this.$router.replace({ name: "Signup" });
            }
            else if(this.email == ''){
              this.$message.error('Email không được trống.');
              this.$router.replace({ name: "Signup" });
            }
            else if(this.pw == ''){
            this.$message.error('Mật khẩu không được trống.');
            this.$router.replace({ name: "Signup" });
            }
            else if(this.rpw == ''){
            this.$message.error('Mật khẩu xác thực không được trống.');
            this.$router.replace({ name: "Signup" });
            }
            else if(this.rpw != this.pw){
            this.$message.error('Mật khẩu xác thực trùng nhau.');
            this.$router.replace({ name: "Signup" });
            }
        },
      dangky(){
        this.$router.replace({ name: "Dangky" });
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
    }
}
.el-button {
    width: 100%;
    background-color: #0080dd;
    font-size: 14px;
    line-height: 18px;
}
</style>
