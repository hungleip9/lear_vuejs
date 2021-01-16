<template>
  <div class="container">
    <LoginForm @onSubmitLogin="getDateLoginForm" @onSubmitClear="clear"/>
    <LoginSuccess :names="name" :dates="date" :phones="phone" :facebooks="facebook"/>
  </div>

</template>

<script>
import LoginForm from './LoginForm'
import LoginSuccess from './LoginSuccess'
export default {
  components:{
    LoginForm,
    LoginSuccess,
  },
  data (){
    return{
        name: '',
        date: '',
        phone:'',
        facebook:'',
    }
  },
  methods: {
    getDateLoginForm(data) {
      this.name = data.name,
      this.date = data.date,
      this.phone = data.phone,
      this.facebook = data.facebook;
    },
    clear(data){
      this.name = data.name,
      this.date = data.date,
      this.phone = data.phone,
      this.facebook = data.facebook;
    }
  },
}
</script>

<style lang="scss" scoped>
     .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
</style>
