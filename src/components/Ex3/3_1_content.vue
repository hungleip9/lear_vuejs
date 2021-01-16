<template>
   <div class="infoWrap">
      <div class="infoLabel">
          <div class="content" v-if="keywords.length > 0">
            <div class="contentWord" v-for="(cart,index) in carts" :key="index">
                <input type="checkbox">
                <b> {{cart}}</b>
            </div>
          </div>
        <p v-if="keywords.length == 0">Chưa có task nào được thêm</p>
      </div>
    </div>
</template>

<script>

export default {
props:['keywords','carts'],
  data (){
    return{
        none:'',
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
    .infoWrap {
    background: #fff;
   
    padding: 0;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    border-radius: 0 0 10px 10px;
    .content{
        width: 100%;
        height: auto;
        .contentWord{
            border-bottom: 1px solid black;
            width: 400px;
            height: 30px;
            text-align: left;
        }
    }
    p{
        color: red;
    }
  }
</style>
