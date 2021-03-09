<template>
    <div class="container">
        <div class="loginWrap">
            <div class="inputWrap">
                <div class="inputLabel">Tên đăng nhập</div>
                <input type="text" v-model="email">
            </div>
            <div class="inputWrap">
                <div class="inputLabel">Mật khẩu</div>
                <input type="password" v-model="password">
            </div>
            <button @click="handleLogin()">Đăng nhập</button>
        </div>
        <div class="registerWrap">
            <div class="inputWrap">
                <div class="inputLabel">Họ tên</div>
                <input type="text" v-model="name">
            </div>
            <div class="inputWrap">
                <div class="inputLabel">Email</div>
                <input type="text" v-model="newEmail">
            </div>
            <div class="inputWrap">
                <div class="inputLabel">Mật khẩu</div>
                <input type="password" v-model="newPassword">
            </div>
            <button @click="handleRegister()">Đăng ký</button>
        </div>
    </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import api from '../api'
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        name: '',
        newEmail: '',
        newPassword: '',
      }
    },
    computed: {
      ...mapState('auth', ['isAuthenticated']),
    },
    methods: {
      ...mapMutations('auth', ['updateLoginStatus']),
      handleRegister () {
        let data = {
          name: this.name,
          email: this.newEmail,
          password: this.newPassword,
        }
        api.register(data).then(() => {
          this.$message({message: 'Success', type: 'success'});
        }).catch(() => {
          this.$message({message: 'Error', type: 'error'});
        })
      },
      handleLogin () {
        let data = {
          email: this.email,
          password: this.password,
        }
        api.login(data).then((response) => {
          this.$message({message: 'Success', type: 'success'});
          localStorage.setItem('access_token', response.data.access_token)
          this.updateLoginStatus({isAuthenticated: true})
          if (this.$router.currentRoute.name !== 'Home') {
            this.$router.push({ name: 'Home' })
          }
        }).catch(() => {
          this.$message({message: 'Error', type: 'error'});
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        .loginWrap {
            background: #f5f5f5;
            border: 1px solid #6E6E6E;
            padding: 24px;
            height: 250px;
            width: 300px;
            .inputWrap {
                margin-bottom: 12px;
                .inputLabel {
                    font-weight: bold;
                    margin-bottom: 8px;
                    text-align: left;
                }
                input {
                    width: 292px;
                    height: 30px;
                }
            }
            button {
                width: 100%;
                height: 40px;
                border-radius: 5px;
                margin-top: 20px;
                background: #0080dd;
                color: #fff;
                border: unset;
                font-weight: bold;
                font-size: 16px;
                cursor: pointer;
            }
        }
        .registerWrap {
            background: #f5f5f5;
            border: 1px solid #6E6E6E;
            padding: 24px;
            height: 300px;
            width: 300px;
            margin-left: 50px;
            .inputWrap {
                margin-bottom: 12px;
                .inputLabel {
                    font-weight: bold;
                    margin-bottom: 8px;
                    text-align: left;
                }
                input {
                    width: 292px;
                    height: 30px;
                }
            }
            button {
                width: 100%;
                height: 40px;
                border-radius: 5px;
                margin-top: 20px;
                background: #0080dd;
                color: #fff;
                border: unset;
                font-weight: bold;
                font-size: 16px;
                cursor: pointer;
            }
        }
    }
</style>