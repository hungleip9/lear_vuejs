<template>
    <el-container>
        <el-aside>
            <el-menu>
                <router-link
                    to="dashboard"
                    style="color: #fff;text-decoration:none">
                    <el-menu-item>
                        <template>
                            <i class="el-icon-menu"></i>
                            Tổng quan
                        </template>
                    </el-menu-item>
                </router-link>
                <el-menu-item class="productControl">
                    <template >
                        <i class="el-icon-s-shop"></i>
                            Quản lý sản phẩm
                        </template>
                </el-menu-item>
                <router-link
                    to="orders"
                    style="color: #fff;text-decoration:none">
                    <el-menu-item>
                          <i class="el-icon-document"></i>
                          Quản lý hóa đơn
                    </el-menu-item>
                </router-link>
                <el-menu-item>
                    <template><i class="el-icon-s-data"></i>Báo cáo thống kê</template>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-location"></i><span style="color: #fff">Quản lý chi nhánh</span></template>
                    <el-menu-item-group title="Hoạt động">
                        <el-menu-item index="1-1">Sản phẩm</el-menu-item>
                        <el-menu-item index="1-2">Đơn hàng</el-menu-item>
                        <el-menu-item index="1-3">Khách hàng</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Báo cáo">
                        <el-menu-item index="1-4">Doanh thu</el-menu-item>
                        <el-menu-item index="1-5">Tồn kho</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item>
                    <template><i class="el-icon-setting"></i>Cài đặt hệ thống</template>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="14" class="title">
                        <slot name="title"></slot>
                    </el-col>
                    <el-col :span="10" class="avatar" style="margin-left:550px!important">
                        <i class="el-icon-bell">
                            <div>12</div>
                        </i>
                        <el-dropdown >
                            <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            <el-dropdown-menu slot="dropdown" style="margin: 0; top: 70px !important">
                                <el-dropdown-item style="border-top: 1px solid #F1F3F8">Thông tin tài khoản</el-dropdown-item>
                                <router-link to="editUser" style="color: #fff;text-decoration:none">
                                <el-dropdown-item style="border-top: 1px solid #F1F3F8">Sửa thông tin tài khoản</el-dropdown-item>
                              </router-link>
                                <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                                <el-dropdown-item>Cấu hình</el-dropdown-item>
                              <router-link to="/" style="color: #fff;text-decoration:none">
                                <el-dropdown-item style="border-top: 1px solid #F1F3F8">Đăng xuất</el-dropdown-item>
                              </router-link>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
          <template>
            <el-main>
              <el-table
                  :data="tableData"
                  border>
                <el-table-column prop="date" label="Date" width="140">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="120">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
              </el-table>
              <div class="block" style="text-alight:left">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="50">
                </el-pagination>
              </div>
            </el-main>
          </template>
            <router-view/>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'BaseLayout',
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          tableData: Array(4).fill(item),
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
        }
    },
    methods: {
        //
    },
}
</script>
<style lang="scss" scoped>
    .el-container {
        height: 700px;
        .el-header {
            background-color: #dae6f6;
            line-height: 60px;

            .el-row {
                .title {
                    text-align: left;
                    font-weight: bold;
                }
                .avatar {
                    text-align: right;

                    .el-dropdown {
                        margin-top: 10px;
                    }
                    i {
                        position: relative;
                        right:30px;
                        bottom: 10px;
                        font-size: 18px;
                        font-weight: bold;
                        div {
                            position: absolute;
                            font-size: 12px;
                            background-color: #F56C6C;
                            padding: 3px 5px;
                            color: #fff;
                            border-radius: 20px;
                            bottom:12px;
                            left: 11px;
                        }
                    }
                }
            }
        }
        
        .el-aside {
            width: 200px;
            background-color: #001529;
            text-align: left;

            .el-menu-item {
                background-color: #001529;
                color: #fff;
            }
            .productControl {
                color: #FFD04B !important;
                i {
                    color: #FFD04B !important;
                }
            }

            .el-submenu {
                color: #fff;
                background-color: #001529;
                
                .titleSubmenu {
                    color: #fff;
                }

                .el-menu-item-group {
                    background-color: #001529;
                }
            .el-menu-item:hover {
                background-color: #001529 !important;
            }

            .el-submenu:hover {
                background-color: #001529 !important;
            }
        }
    }
}

</style>