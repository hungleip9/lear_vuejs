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
            placeholder="Email"
            v-model="email">
        </el-input>
        <el-input
            type="password"
            style="padding: 10px 0;"
            placeholder="Mật khẩu"
            v-model="pw">
        </el-input>
        <div style="text-align: right; margin-top: 8px; margin-bottom: 24px">
          <el-link type="primary" style="padding-right:10px; color:#0080dd" @click="signup">Đăng Ký</el-link>
            <el-link type="primary" style="color:#0080dd" @click="dangky">Quên mật khẩu?</el-link>
            <h3>Count: {{count}}</h3>
        </div>
        <el-button type="primary" :plain="true" @click="login" style="color:white">ĐĂNG NHẬP</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "login",
    components:{
      ...mapState([
              'count',
            ])
    },
    data() {
        return {
            email: '',
            pw: '',
        }
    },
    methods: {
        login() {
            if (this.email != '' && this.pw != '') {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "Admin" });
            }
            else if(this.email == ''){
              this.$message.error('Email không được trống.');
              this.$router.replace({ name: "Login" });
            }
          else if(this.pw == ''){
            this.$message.error('Mật khẩu không được trống.');
            this.$router.replace({ name: "Login" });
          }
        },
      dangky(){
        this.$router.replace({ name: "Dangky" });
      },
      signup(){
        this.$router.replace({ name: "Signup" });
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
