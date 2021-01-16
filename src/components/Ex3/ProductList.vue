<template>
  <div class="container">
      <div class="info">
          <table>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
            <tr>
              <td colspan="6">
                  <p>Không có dữ liệu</p>
              </td>
            </tr>
          </table>
          
      </div>
  </div>
</template>

<script>

export default {

  components: {
    
  },
  data() {
    return {

    }
  },
  methods: {
     
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
    .info{
        
        height: 200px;
        margin-top: -500px;
       table{
           border: 1px solid black;
           border-collapse: collapse;
           th{
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            width: 150px;
            height: 50px;
            font-weight: bold;
            background: #f2f6fe;
           }
       }
    }
}
</style>