<template>
  <div class="container">
    <!-- <input
        type="text"
        placeholder="Ấn Enter để tìm kiếm"
        v-model="searchText"
        @keypress="onPressSearch($event)"
    > -->
    <el-input placeholder="Nhập tên sản phẩm cần tìm kiếm" v-model="searchText"  size="medium"></el-input>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Name"
          prop="name">
      </el-table-column>
      <el-table-column
          label="Description"
          prop="description">
      </el-table-column>
      <el-table-column
          label="Price"
          prop="price">
          <template v-slot:default="a">
          {{formatPrice(a.row.price)}}
        </template>
      </el-table-column>
      <el-table-column
          label="Image"
          prop="image">
          <template slot-scope="scope">
            <span v-if="scope.row.image !==null">
            <img :src="'http://vuecourse.zent.edu.vn/storage/'+scope.row.image"/>
            </span>
          </template>
      </el-table-column>
      <el-table-column
          label="Created_at"
          prop="created_at">
        <template v-slot:default="a">
          {{formatDate(a.row.created_at)}}
        </template>
      </el-table-column>
      <el-table-column
          align="right" >
        <template slot="header" slot-scope="">
          <el-button type="primary" @click="dialogVisible = true">Thêm mới</el-button>
        </template>
        <template v-slot:default="a">
          <el-button
              size="mini"
              @click="handleEdit(a.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="onDelete(a.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- //Phân trang -->
    <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
    <!-- // Modal thêm mới -->
    <el-dialog
        title="Thêm mới sản phẩm"
        :visible.sync="dialogVisible"
        width="80%"
    >
      <el-form ref="form"  label-width="120px">
        <el-row>
          <el-col :span="12"><el-form-item>
                <!-- <input
                      type="file"
                      @change="onChangeImage"
                  ><br> -->
                  <el-upload class="avatar-uploader">
                    <img v-if="image" :src="image" class="avatar" @change="onChangeImage">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
              </el-form-item></el-col>
          <el-col :span="12">
              <el-form-item label="Name">
                <el-input v-model="name"></el-input>
              </el-form-item>
              <el-form-item label="Price">
                <el-input v-model="price" type="number"></el-input>
              </el-form-item>
              <el-form-item label="Description">
                <el-input v-model="description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button @click="dialogVisible=false">Cancel</el-button>
              </el-form-item>
          </el-col>
        </el-row>
        
      </el-form>
    </el-dialog>
    <!-- //Modal edit -->
    <el-dialog
        title="Chỉnh sửa sản phẩm"
        :visible.sync="dialogEditVisible"
        width="50%"
        height="500px!important"
    >
      <el-form ref="form"  label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Price">
          <el-input v-model="price" type="number"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="description"></el-input>
        </el-form-item>
         <el-form-item style="margin-left:0!important" class="upload-file">
            <el-upload class="avatar-uploader">
              <img v-if="image" :src="image" class="avatar" @change="onChangeImage">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          <el-button type="primary" @click="onUpdate()" class="btn-edit">Edit</el-button>
          <el-button @click="dialogEditVisible=false" class="btn-cancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- //Modal xóa -->
    <el-dialog
        title="Thông báo"
        :visible.sync="dialogDeleteVisible"
        width="30%">
      <center><span>Bạn có chắc chắn muốn xóa không</span></center>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleDelete()">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data() {
    return {
      tableData: [],
      searchText: '',
      dialogTableVisible: false,
      dialogDeleteVisible: false,
      dialogVisible: false,
      dialogEditVisible: false,
      name:'',
      price: '',
      description: '',
      idProduct: 0,
      idProduct2: 0,
      currentPage: 1,
      pageSize: 5,
      total:0,
      image:'',
      http:'',
    }
  },
  methods: {
    //image
      // handleAvatarSuccess(res, file) {
      //   this.image = URL.createObjectURL(file.raw);
      // },
      // beforeAvatarUpload(e) {
      //   if(e.target.files.length) {
      //   this.image = e.target.files[0]
      //   }
      // },
    //end image
    handleCurrentChange(val) {
      this.currentPage = val;
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        params:{
          page:this.currentPage
        }
      }).then((response) => {
        console.log(response)
        this.tableData = response.data.data.data;
        this.pageSize = response.data.data.per_page;
        this.total = response.data.data.total;
        this.currentPage = response.data.data.current_page
      }).catch((error) => {
        console.log(error);
      });
    },
    handleEdit(data) {
      this.dialogEditVisible = true
      this.idProduct = data.id
      this.name = data.name
      this.price = data.price
      this.description = data.description
      this.image = 'http://vuecourse.zent.edu.vn/storage/'+data.image
    },
    onDelete(id) {
      this.dialogDeleteVisible = true
      this.idProduct2 = id
    },
    onUpdate() {
      const formData = new FormData();
        formData.append('name', this.name)
        formData.append('price', this.price)
        formData.append('description', this.description)
        if (this.image) {
          formData.append('image', this.image)
        }
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + this.idProduct,
        data: formData
      }).then(() => {
        this.getDataList()
        this.dialogEditVisible = false
        this.$notify({
          title: 'Success',
          message: 'Chỉnh sửa thành công',
          type: 'success'
        });
      }).catch(() => {
          this.$notify({
          title: 'Error',
          message: 'Chỉnh sửa không thành công',
          type: 'Error'
          });
        });
    },
    handleDelete() {
      axios({
        method: 'delete',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + this.idProduct2,
      }).then(() => {
        this.getDataList()
        this.dialogDeleteVisible = false
        this.$notify({
          title: 'Success',
          message: 'Xóa thành công',
          type: 'success'
        });
      }).catch(() => {
          this.$notify({
          title: 'Error',
          message: 'Xóa không thành công',
          type: 'Error'
          });
        });
    },
    //upload anh
    onChangeImage(e){
      if(e.target.files.length) {
        this.image = e.target.files[0]
        }
    },
    onSubmit() {
        const formData =new FormData();
        formData.append('name', this.name)
        formData.append('price', this.price)
        formData.append('description', this.description)
        formData.append('image', this.image)
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: formData,
      }).then(() => {
        this.getDataList()
        this.dialogVisible = false
        this.$notify({
          title: 'Success',
          message: 'Thêm mới thành công',
          type: 'success'
        });
      }).catch(() => {
          this.$notify({
          title: 'Error',
          message: 'Thêm mới khong thành công',
          type: 'Error'
          });
      });
    },
    formatDate (dateString) {
      return moment(dateString).format(' HH:mm | DD/MM/YYYY')
    },
    formatPrice (price) {
        return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
    },
    // onPressSearch (event) {
    //   if (this.searchText && event.code === 'Enter') {
    //     axios({
    //       method: 'get',
    //       url: 'http://vuecourse.zent.edu.vn/api/products' ,
    //       params: {
    //         q: this.searchText
    //       },
    //     }).then((response) => {
    //       this.tableData = response.data.data.data
    //     })
    //   }
    // },
    getDataList() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
      }).then((response) => {
        this.tableData = response.data.data.data
        this.pageSize = response.data.data.per_page;
        this.total = response.data.data.total;
        this.currentPage = response.data.data.current_page
      })
    }
  },
  mounted() {
    this.getDataList();
  },
  watch:{
        searchText (value) {
            axios({
                method: 'get',
                url: 'http://vuecourse.zent.edu.vn/api/products',
                params: {
                    q: value,
                },
            }).then((response) => {
                this.tableData = response.data.data.data;
                this.current_page= response.data.data.current_page
                this.per_page = response.data.data.per_page
                this.total = response.data.data.total
                this.next_page_url = response.data.data.next_page_url
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
  margin-top: 100px;
  img{
    width: 30px;
    height: 30px;
  }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    line-height: 178px;
    text-align: center;
    border: 1px solid;
    background: gray;
    color: white;
    width: 298px;
    height: 250px;
  }
  .avatar {
    width: 178px!important;
    height: 178px!important;
    display: block;
  }
  .upload-file {
    position: relative;
    height: 200px!important;
    img {
      position: absolute;
      left: -30px;
    }
    .btn-edit{
      position:absolute;
      left: 202px;
      top: 95px;
    }
    .btn-cancel{
      position:absolute;
      left: 270px;
      top: 95px;
    }
  }
  //el-row
  el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>