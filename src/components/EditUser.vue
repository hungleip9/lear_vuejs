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
            placeholder="Tên"
            v-model="name">
        </el-input>
        <el-input
            style="padding: 10px 0;"
            placeholder="Ngày sinh"
            v-model="date">
        </el-input>
        <el-input
            style="padding: 10px 0;"
            placeholder="Số điện thoai"
            v-model="phone">
        </el-input>
        <el-input
            style="padding: 10px 0;"
            placeholder="Địa chỉ"
            v-model="adress">
        </el-input>
        
        <el-button type="primary" :plain="true" @click="editUser" style="color:white">Sửa thông tin</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            name: '',
            date: '',
            phone: '',
            adress: '',
        }
    },
    methods: {
        editUser() {
            if (this.name != '' && this.date != '' && this.phone != '' && this.adress != '') {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "Admin" });
            }
            else if(this.name == ''){
            this.$message.error('Tên không được trống.');
            this.$router.replace({ name: "EditUser" });
            }
            else if(this.date == ''){
              this.$message.error('Ngày sinh không được trống.');
              this.$router.replace({ name: "EditUser" });
            }
            else if(this.phone == ''){
            this.$message.error('Số điện thoại không được trống.');
            this.$router.replace({ name: "EditUser" });
            }
            else if(this.adress == ''){
            this.$message.error('Địa chỉ không được trống.');
            this.$router.replace({ name: "EditUser" });
            }
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
    background-image: linear-gradient(to bottom right,  #0f1010, #7ECFC7);
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
