<template>
    <div class="container">
        <div class="todoWrap">
            <div class="appTitle">Products</div>
            
            <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                v-model="name"
            ><br>
            <input
                type="text"
                placeholder="Nhập giá sản phẩm"
                v-model="price"
            ><br>
            <input
                type="text"
                placeholder="Nhập bình luận cho sản phẩm"
                v-model="description"
            ><br>
             <el-button type="primary" @click="handleKeyup">ADD</el-button>
            <div v-if="tasks.length > 0">
                <TodoItem
                    v-for="(task) in tasks"
                    :task="task"
                    :key="task.id"
                    @changeStatus="(value) => handleChangeStatus(value, task)"
                    @onDeleteItem="handleDeleteItem(task)"
                    @onEditItem="(id) => handleEditFrom(id)"
                />
            </div>
            <div v-else class="emptyWrap">
                Chưa có task nào được thêm
            </div>
        </div>
    </div>
</template>

<script>
  import TodoItem from './ProductItem.vue'
  import axios from 'axios'
  export default {
    name: 'Todo',
    components: {
      TodoItem
    },
    data () {
      return {
        tasks: [],
        title: ''
      }
    },
    methods: {
      handleKeyup () {
        
          axios({
            method: 'post',
            url: 'http://vuecourse.zent.edu.vn/api/products',
            data: {
              name: this.name,
              price: this.price,
              description: this.description,
            }
          }).then(() => {
              alert('thanh cong')
              this.getDataTodos()
              this.name = '',
              this.price = '',
              this.description = ''
          })
        
      },
      handleChangeStatus () {
        
      },
      handleEditFrom (id) {
          axios({
            method: 'put',
            url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
            data: {
              name: this.name,
              price: this.price,
              description: this.description,
            }
          }).then(() => {
              alert('edit thanh cong')
              this.getDataTodos()
              this.name = '',
              this.price = '',
              this.description = ''
          })
      },
      handleDeleteItem (task) {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + task.id,
            }).then(() => {
        alert('Xóa thành công!')
          this.getDataTodos()
          
        })
      },
      getDataProducts() {
        axios({
          method: 'get',
          url: 'http://vuecourse.zent.edu.vn/api/products',
        }).then((response) => {
          this.tasks = response.data.data.data
        })
      }
    },
    mounted(){
      this.getDataProducts()
    },
  }
</script>

<style lang="scss" scoped>
    $colorStroke: #d8e0ea;
    $colorMain: #0080dd;
    $colorDefault: #253036;
    $colorGreen: #39cd74;
    $colorRed: #f54b5e;
    $colorTableHeader: #f2f6fe;
    $colorWhite: #fff;
    $colorOrange: #f2994a;

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background: $colorMain;
        height: 100vh;

        .todoWrap {
            width: 100%;
            height: 100%;
            background: $colorWhite;
            border-radius: 10px;
            padding: 24px;

            .appTitle {
                font-size: 24px;
                font-weight: bold;
                color: $colorGreen;
                text-align: center;
                margin-bottom: 20px;
            }

            input {
                width: 25%;
                height: 40px;
                border: 1px solid $colorStroke;
                border-radius: 5px;
                outline: unset;
                font-size: 14px;
                margin-bottom: 24px;

                &:hover,
                &:active,
                &:focus {
                    border: 1px solid $colorMain;
                }
            }

            .emptyWrap {
                height: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $colorRed;
            }
        }
    }
</style>