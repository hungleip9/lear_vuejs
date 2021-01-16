<template>
   <div class="infoWrap">
      <div class="infoLabel">
        Xin Chào: {{names}} <br>
        Ngày sinh: {{dates}} <br>
        Số điện thoại: {{phones}} <br>
        FaceBook:<a :href="facebooks">{{facebooks}}</a>
      </div>
    </div>
</template>

<script>

export default {
props:['names','dates','phones','facebooks'],
  data (){
    return{
        content:'Cao'
    }
  },
}
</script>

<style lang="scss" scoped>
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
</style>
