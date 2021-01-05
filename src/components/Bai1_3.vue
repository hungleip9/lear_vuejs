<template>
  <div class="container">
    <table>
      <tr>
        <td colspan="4">
          <div class="display">
            <h2>{{content || '0'}}</h2>
            <p>{{toantu}}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td><input type="button" value="C" @click="clear"></td>
        <td><input type="button" value="DEL"></td>
        <td><input type="button" value="%" @click="percent"></td>
        <td><input class="btnyellow" type="button" value="÷" @click="divide"></td>
      </tr>
      <tr>
        <td><input @click="append('7')" type="button" name="one" value="7"></td>
        <td><input @click="append('8')" type="button" name="two" value="8"></td>
        <td><input @click="append('9')" type="button" name="three" value="9"></td>
        <td><input class="btnyellow" type="button" name="plus" @click="times" value="X"></td>
      </tr>
      <tr>
        <td><input @click="append('4')" type="button" name="four" value="4"></td>
        <td><input @click="append('5')" type="button" name="five" value="5"></td>
        <td><input @click="append('6')" type="button" name="six" value="6"></td>
        <td><input class="btnyellow" @click="minus" type="button" name="minus" value="-"></td>
      </tr>
      <tr>
        <td><input @click="append('1')" type="button" name="seven" value="1"></td>
        <td><input @click="append('2')" type="button" name="eight" value="2"></td>
        <td><input @click="append('3')" type="button" name="nine" value="3"></td>
        <td><input class="btnyellow" @click="add" type="button" name="times" value="+"></td>
      </tr>
      <tr>
        <td colspan="2"><input @click="append('0')" type="button" class="operator btnzero" name="zero" value="0"></td>
        <td><input @click="dot" type="button" class="operator" name="div" value="."></td>
        <td><input @click="equal" class="btnyellow" type="button" name="doit" value="="></td>

      </tr>
    </table>
  </div>
</template>

<script>

export default {

  data (){
    return{
      content: '',
      operator: null,
      operatorClicked: false,
      previous: null,
      toantu: '',

    }
  },
  methods: {
    // changeUserName (value){
    //   this.name = value
    // },
    clear(){
      this.content= '';
    },
    append(number){
      if (this.operatorClicked) {
        this.content = '';
        this.operatorClicked = false;
      }
      this.content = `${this.content}${number}`;
    },
    percent(){
      this.content = `${parseFloat(this.content) / 100}`;
    },
    dot() {
      if (this.content.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.content;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a, b) => b / a;
      this.setPrevious();
      this.toantu = '÷';
    },
    times(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
      this.toantu = 'X';
    },
    minus() {
      this.operator = (a, b) => b - a;
      this.setPrevious();
      this.toantu = '-';
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
      this.toantu = '+';
    },
    equal() {
      this.content = `${this.operator(
          parseFloat(this.content),
          parseFloat(this.previous),
          this.toantu = '',
      )}`;
      this.previous = null;
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
  table{
    border: 1px solid black;
    width: 300px;
    height: 400px;
    background-color: #312d2deb;
    border-radius: 10px;
    .display{
      background-color: #0a0d10;
      height: 80px;
      padding: 0px;
      margin-top: -10px;
      border-radius: 10px;
      position: relative;
        h2{
          font-size: 25px;
          font-weight: bold;
          position: absolute;
          color: white;
          bottom: 0px;
          right: 20px;
        }
        p{
          position: absolute;
          top: 0px;
          right: 10px;
          font-size: 13px;
          color: white;
        }
      }
    tr{
      input{
        width: 60px;
        height: 50px;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        background-color: #6E6E6E;
        }
      .btnyellow{
        background-color: #d69643!important;
      }

    }
    .btnzero{
      width: 90%;
      height: 50px;
    }
  }

}
</style>
