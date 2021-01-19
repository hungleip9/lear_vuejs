<template>
  <div class="container">
       <div class="container">
         <div id="example">
            <p>Thông điệp ban đầu: "{{ message }}"</p>
            <p>Thông điệp bị đảo ngược bằng tính toán (computed): "{{ reversedMessage }}"</p>
          </div>
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Tên đăng nhập</div>
        <input type="text" @input="onChangeName($event.target.value)">
        <div class="inputLabel textRed">{{nameErrorMsg}}</div>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        
        <input type="password" @input="onChangePassword($event.target.value)">
        <div class="inputLabel textRed">{{passwordErrorMsg}}</div>
       
      </div>
      <button class="loginButton" @click="onLogin()">Đăng nhập</button>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
          <div v-if="show">
            Xin chào: {{content}} <br>
            <span>Avatar: <img :src="src"></span>
            </div>
      </div>
      <div>
          <table>
             <tr>
                 <th>Ten</th>
                 <th>Gia</th>
                 <th>So Luong</th>
             </tr>
             <tr v-for="(product,index) in products" :key="index">
                 <td >
                     {{ product.name }}
                 </td>
                 <td>{{ product.price }}</td>
                 <td>{{ product.quantity }}</td>
             </tr>
             
          </table>
          
      </div>
     
    </div>
     <div class="watch" :style="{background: divBg}">
        <br> <br>
         <input type="number" v-model="number">
     </div>
  </div>
        
  </div>

</template>

<script>

export default {

  data (){
    
    return{
      message: 'người đông bến đợi thuyền xuôi ngược',
        name: '',
        password: '',
        nameErrorMsg: '',
        passwordErrorMsg: '',
        content:'',
        src:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBEQFRUVFQ8VDxAQFRUQFRUXFRUWFhcVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0dHyYtLS0vLS8tLS0tLy0tLS0rKy0tKy0tMC0tLS0tLS0tLS0tLSstLS0rKystLS0tLSstK//AABEIASwAqAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xAA8EAACAQICBgkDAgUDBQEAAAAAAQIDEQQhBQYSMUFRBxMUYXGBkaHRIrHBMvAIQlJi4XKi8SNkg5KzJP/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/EACcRAQEAAgEDBAICAwEAAAAAAAABAhEDEiExBBNBUSJxYZEygdEU/9oADAMBAAIRAxEAPwDjNxcA6mlKYbfMgBAlTfN+pAAqc297fqyFJri/UgBVXWPm/VkOb5v1ICAq23zfqFN85erKQBVtvm/VjrHzfqykAVdY+b9WOsfN+rKQBV1j5v1Y6x836spCAm4U3zfqQAbVdY+b9WCkAASCogEuV7d2S9b/AJAEWBIKIQJIAAkIggEkFAEkAAVTi07NWa3pkEEAkgoAkAQCQABSnd9xXYTuIBIsEQnYNE2FiiC7QqxjtbUFK8WottrYb/mVt78S3YWEuqIIKrCxBAJsLAQCSY7+fdz7gKQVTd23ZK98luXciLAQCbACATYFEAyY4WyvUewuCavN/wCmH5dl3gisWL/5KiQWRNoBVJq+V7cL5sgukQCbgKgEi40IBIGkQCQFQCRcIgEgaVBn6IwfWzSMEzdF4zqppksHr8XqolS29y5v8Hja8lSk1BZ/1yzl5LdH7956rF607VLZvw3Hj8RU2pNmOMvytW223d3be9vNsgkgz0m0gkFRAJAECxIAgWJAEAkARYEgCASAIsLEgCLAkAQCSutScJbLae7OLUlmk968RoWyCoAAUU2+JMZXbJKaVAkGWkQCSRoUgrjFsyaGBlLgBhg32H1fnLgzZUNT5vgY7i6ePB7yOo1R/wAsvRlqtqTUX8r80OqGq8QD02J1WqR4M1eI0TOG9MssGtBdnRa3otlRAJA0IBNwNCASBoY8Vwbt38S7BJcLXLdN28ftYmjDi/L5NWHxpsyXrAopzuVm2XbXZosXqNByJw9FyZ6/V7QTm1kLdE7tfonQcptZHQNA6mOVm1Zc2ei0NoGFGKckr9+5fJvM3ksudjkz5vpux4/ti4HVuhSV2trxyXobrC4OCyUIrduSLdKkbHDw3ej/AAabbfLZqK500lkWZpPhflezMt0iiVLL7kGmxeiqM/1Uo+St9jzul9TKclen6S+T2048y26aZlMrEslcM09qi4N/S0eI0hoyUHuPpvSGj4zTU1k9ztuOea1arWTcVdcGl9zo4+bfatWWDirViLG60xot028jTNWOmNaLCwAQsAAMaK4/u7L055bKvd3v4cMi2nwW5cXzK4wtlf03+ppx3rs21OUclmypZLNq/Ap2kslm/wB72Zej9HOrJOUn3JJO3qZX+GP7bvVjRTrSi89hW2f7n/V4cv8Ag7Rq9olUYq6+p8+CPM6g6sU4Prdlyklbam3KWfBX3LJbjosMPnZ/Fjm5c74bcMflZ6v6ru9ty5Gbhqa38yitsJW9bsu0XdZW7jSzZUI9zMynHIxMPfi/EzIzXAouxiHEqTIYGM6a8ylxtufkX5FEoIC1LkYGJwCnFrJxd7mx2SuhvIOO66au7DdllvTOUaTwjhI+ptYtGxr0pRtms4vv5eZwTW/Rmy3lzOzhz32aM8dPCAqnGzIsdLWAWAGFGbyS9ytQu85Zc+d+XMuy2VbYW1dJ3s8nyz5ERi1n6uX4RyzD77t1v+kztFWVt6/bPYaoYNSaavwee88nSglK298WdL1Awu1JeRsvaWsPN06poGmqNOKW+1352M6Vfaf5MSOzvfJ7imlVTs+GaODe+7pX6sXtZrkZ2Ep5XKKcrx9jJo9wRfhAuRiIouJFFUCpyIQAPMpj3lViUgLVV28DH6+17WfG5cx6dsjEwsVsy3707+BBLxG1tLc17nNdftHJ3klvz+T3mKqRutnffPkzS64YS9BO266z8LmfHlrJjnNx87Y+nszaMY3GsFHZqPxNTY9KeHKpBVYFNqJSsu/gUxW1m/8AH+SNhLOTz/e5C+3wdjVv7/r/AKz/AF/aqLbdoZL+r4OsdGdBRd823nJ+Vl5JHLIZHV+jGp9SXc/szHlx1hTC/k91Wm4Q2W7u8vHNveThUW9I228uSLuGR58dTbYZFvWHWLD6Nw8sRiZ2SyhCNnOpLhGnFtXf2WbLuFjkcv6TaMcXpGrhalTYhS0ZUrKpvUJwqdZmuUlGMcs81ysVHudROkTC6WnKlRhWp1IpydOok1sJpbSnHLe0rPM9qcK/h71drxrT0hKyoypVKUGnBuUusjdNfqjbYvwvkd0uUVElNwmB4TpU1xxWjqElhcJWltU01jklKjRbls/UrP6lla9l9S3nluhDXbH47E1sPiqjrQjS6yNSSScJKUY7N0ldNSf/AKnQukXE4alovEyxim6LhsSjTSc25tRhsXyUtpxab3Wucp6AtOwoQxtLqm2oxrqcVtVJRhePV24vNWXOTA7bOptO3qU16ijFqPLPkjVYDS8MRGNelKMoy/pkpJPdKLabV07p96L2KxSl9KWT4sg1s6j2rkafqOphm5WysvTIToSlJRW9/u5a07Hq6Di3naP5Lj/lC+HCtal/1H4mgN9rTK9R+JoT1MfDjvkABkimNNLcvMqJSBZNGw6H0eYrZkvI54em1SxexNGHJjvFcbquwTq3k2ZWGkayi9qKnffb/KM/Cdx5Nmnb5ehwNRWPn/pWxM46Sxu0nHbp4aEWn+qCcJej2P8Aadzw87I4x07VaLxVFQt1uxJ4hp3dvpVNNcHZS9TKI3H8N+Nl1mLw+19LhSqxg+ak4ykvKUU/I7mfPX8PErY/EP8A7Z//AFpnf+sAvKQlOxaTvxLdRgc0/iGxrWjaVNSsp4iO2v6lGnN5+eyznPQ3jYwxkqFpbVdRgpRV1GENqpNvl+iK8z3n8QOHc8DQqRTtTrWm1mkpwau/NJeZ4/oOpTeJqzUXsxjHblZWz20lfm78OTA7PGlClFQpwjCCyjCCUYrwSLdOpeSWb7lvLypOV3wRl6Mwlm5SyT3PmlyIKqklRgpSu5S3Lc7Hm9b8WupT4yTbv7L7m90w9upZLdZJHPddceknFPcrGzhm8mOd1i5lp6ptTZqDLx9Xak2Yp6cnZyKJ1ErLnuBEv1rduYJN21brsuAmxBmxDN0ZX2ZJmHYqg7MaHYtWNIKpT2W+VvE9LhKjjLvXM5Dq5pRwazOm6OxqqxTXmed6ji1eqOriz3NPRTqp3fp+0ck6WdUatSq8bhqDcFTcsVOMoLON/q2P1N2zbz4cjptCV2kVaTmqdGpKp+jq6jnf+lRe1fyuc0rbpwnonqVY6WodTOEW9tTU20p09lucMk7vZTa74o+mI1Lnz70SaIqV8TTxLSjTwu3aaWdSc07QvySk2/Lmdzp1DKo2sJWzuKlW63WMKjNmRBbbtw/wQeN6TsP1uisTHlBVF/45Rn+DynQbTSwVaeV3Xs+do042uvGTOk6V0U69KrQlF2qQqQd91pRa/Jy3oLhKFXGYacbShKk5+MXOEovzA7JomhdNvL8me8MsrZW3LxMfCVZNt7lkkrfYrx+kIUYOc3lnsrm+QndWp1kx0aFN7ttppdy53OG606R25PM9PrjrC6kpO+/lw7jmukMRtNnfwcXTHLyZ7YVSWdzH62Tzilbm+JXiF9L8CiSvFbLsjdnbvUY4yaW4fVvybzXJokrkrOKXD7WIMcOOXyuWWvC3218l6jtr5IxAcfv8n23+3j9Mx47+1LLg3n3jtv8Ab7mGC+/yfZ7eP02eH0rsvc/JnqNC68QotbSqW7kn+TwgF5875T28Z4dy0d0jaPkkp1ZQf90J2v4pOxhdJHSBQngXh8HUjOVe8asou+xTVtpZrfLd4XONGfg9D16v6IZc5NRXuaend7Rs3qd3cuiKjCei6ap1KbkpVusjF/VGTm2lJcHs29j2dOk07HzbR1Xx9NqdKErrdKjUjtLwtK56XVrpE0jgK0aeOdadFtRmq0WqkVu2ozavLwd72JcbCWO7Yai5PL1NhtKNlx9bGLhP+pCNWnVpuEoqUZRatJSV00/BnjukTXqjoqKpQtWxE1eFK/0wW7bqNcMnZLN24bzGK9zi8XCEHOpKMIrOU5SUYrvbe44/0e6RoQ09pF069Ds9RVKnWymoxbdSMvoct6vOa9Dm+m9YdI6Ru60684PdSpxlGks7r6I5O3N3feaCrQnD9cJR/wBScfuZaTb6o0nr5o3DRf8A+zDzlwjTmpv/AG3scy1l6SqNZvZqSly2YySXhexyAGWF6fCZTb0OP1gVR3tLzt8msnj7/wAvuYINv/oz+2HtYst418kWOua3Zdy3FsGN5c75rKYYz4XqeIa5N8W7tgsgTlznilwxvwAA1sgAAAC5QhtSSLJu6S3TLwVFL6nv4d3ebSnjZR4mID1sOOYzUceWVyu27wunpx4s2a1nco7M0pJ74ySkn5M8kBcJU3XtaGtfVxUIJRjFWjGOSS5JcDExOsMJT6106bnZLrHGLlZbltNXPK3IJ7WJ1V6KvrLOXFmBiNJOe/PueZrAZdETdY+Mwyf1RVuaW7yNebg1uKhsyfqji9TxTH8o6OHO3tVkAHI3gAAAAAAAAAAGTgf1+TMYuYeezJP1M+O6zlrHKbxraAkHruJAJAQAJKIBIApMLSH6l4GeavFzvJ92RzequsNN3DPyWQAea6gAAAAAAAAAAAABscHV2lZ719i+amnNxd0bSlUUldea5Hoen5eqdN8uXlw1dxW0A2Dq20gBJloQAU1JqKuyXUm6SbUYmtsRyebyX5NWV1qjk7soPK5+X3Mv4dvHh0wABpZgAAAAAAAAAAAAAV0qri7ooBZbLuFm21o1VJZeaIxUnGN15mthNp3RlTxG3HZt9TtuOzH1Eywsvaue8WspZ4ZOFm3FN9/3LpqITcXlkZssYlFPi+HLxNnF6jHp1l20xz4rvsv1aiirvyNbXrOTu/JFNSo5O7KDm5ue8naeG7j45j+wAHO2AAAAAAAAAAAAAAAAAAAAACXK/kQAAAAAAAAAAAAAAAAZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fA7JHm/b4AwQZ3ZI837fAA//9k=',
        show: false,
        products: [
           {name: 'Iphone 12', price: 1231231, quantity:5},
           {name: 'Iphone 11', price: 121212, quantity:43},
           {name: 'Iphone X', price: 444433, quantity:5},
        ],
        divBg:'',
        number:'',
    }
  },
  methods: {
      onLogin () {
          
        if (this.name.length === 0) {
          this.nameErrorMsg = 'Tên đăng nhập không được để trống'
          
        }
        if (this.password.length < 6) {
          this.passwordErrorMsg = 'Mật khẩu phải có độ dài ít nhất 6 ký tự'
        }
        if (this.password.length === 0) {
          this.passwordErrorMsg = 'Mật khẩu không được để trống'
        }
        if (this.name === 'admin' && this.password.length !== 0) {
          this.content = 'admin'
          this.show = true
          
        }
        if (this.name != 'admin' && this.password.length !== 0) {
          this.content = this.name
          this.show = true
        }

      },

      onChangeName (value) {
        this.name = value
        this.nameErrorMsg = ''
      },
      onChangePassword (value) {
        this.password = value
        this.passwordErrorMsg = ''
      },
    
   
  },
  computed: {
       // một computed getter
            reversedMessage: function () {
                // `this` trỏ tới component
                return this.message.split(' ').reverse().join(' ')
            }
  },
  watch:{
    number(value) {
       
         if(value <= 10 && value >= 0) {
          this.divBg = 'gray'         
        }
        if(value < 30 && value > 11) {
          this.divBg = 'green'
        }
        if(value < 50 && value > 31) {
          this.divBg = 'blue'
        }
        if(value < 70 && value > 51) {
          this.divBg = 'pink'
        }
        if(value < 100 && value > 71) {
          this.divBg = 'red'
        }
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
    .textRed{
        color: red;
    }
    img{
       
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }
    table{
        border: 1px solid black;
        th{
            border: 1px solid black;
        }
        td{
            border: 1px solid black;
        }
    }
    .watch{
        border: 1px solid black;
        width: 300px;
        height: 500px;
    }
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

    .infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;
      align-items: center;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
  }
</style>
