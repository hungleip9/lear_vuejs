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
             <el-button type="primary" @click="handleKeyup" v-if="this.edit === false" :plain="true">ADD</el-button><br><br>
             <el-button type="success" @click="EditItem" v-if="this.edit === true" :plain="true">EDIT</el-button><br><br>
             <input
                type="text"
                placeholder="Nhập ten cho sản phẩm"
                v-model="q"
                class="search"
            ><br>
            <el-button type="primary" @click="search" :plain="true">Tim Kiem</el-button><br><br><br>
            <input
                type="file"
                placeholder="Nhập ten cho sản phẩm"
                @change="onChangeImage"
            ><br>
            <el-button type="primary" @click="uploadFile" :plain="true">Upload File</el-button><br><br><br>
            <div v-if="tasks.length > 0">
                <TodoItem
                    v-for="(task) in tasks"
                    :task="task"
                    :key="task.id"
                    @changeStatus="(value) => handleChangeStatus(value, task)"
                    @onDeleteItem="handleDeleteItem(task)"
                    @onEditItem="(task) => handleEditFrom(task)"
                />
                <el-pagination>
             
            </el-pagination>
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
        title: '',
        id: '',
        edit: false,
        image: '',
      }
    },
    methods: {
      search() {
        axios({
          method: 'get',
          url: 'http://vuecourse.zent.edu.vn/api/products/?q=' + this.q,
        }).then((response) => {
          this.tasks = response.data.data.data
        })
      },
      onChangeImage(e) {
        if(e.target.files.length) {
          this.image = e.target.files[0]
        }
      },
      uploadFile() {
        const formData =new FormData();
        formData.append('name', 'hungle')
        formData.append('price', 8500)
        formData.append('image', this.image)

          axios({
            method: 'post',
            url: 'http://vuecourse.zent.edu.vn/api/products',
            data: formData,
          }).then(() => {
              this.$message.success('Thành công.');
          })
      },
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
              this.$message.success('Thành công.');
              this.getDataProducts(),
              this.name = '',
              this.price = '',
              this.description = ''
          })
        
      },
      handleChangeStatus () {
        
      },
      handleEditFrom (task) {
        this.id = task.id
        this.name = task.name
        this.price = task.price
        this.description = task.description
        this.edit = true
        this.$message.success('Bắt đầu Edit.')
        this.getDataProducts()
      },
      EditItem(){
        axios({
            method: 'put',
            url: 'http://vuecourse.zent.edu.vn/api/products/' + this.id,
            data: {
              name: this.name,
              price: this.price,
              description: this.description,
            }
          }).then(() => {
              this.$message.success('Edit thành công.');
              this.getDataProducts()
              this.name = '',
              this.price = '',
              this.description = '',
              this.edit = false
          }).catch(() => {
            if(this.name === ''){
              this.$message.error('Tên không được rỗng.');
            }else{
               this.$message.error('Giá không được rỗng.');
            }
            
        });
      },
      handleDeleteItem (task) {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + task.id,
            }).then(() => {
        this.$message.success('Xóa thành công!');
          this.getDataProducts()
          
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