<template>
    <el-container>
        <el-aside>
            <el-menu>
                <el-menu-item>
                    <template><i class="el-icon-menu"></i>Tổng quan</template>
                </el-menu-item>
                <el-menu-item class="productControl">
                    <template ><i class="el-icon-s-shop"></i>Quản lý sản phẩm</template>
                </el-menu-item>
                <el-menu-item>
                    <template><i class="el-icon-document"></i>Quản lý hóa đơn</template>
                </el-menu-item>
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
                    <el-col :span="10" class="avatar">
                        <i class="el-icon-bell">
                            <div>12</div>
                        </i>
                        <el-dropdown >
                            <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            <el-dropdown-menu slot="dropdown" style="margin: 0; top: 70px !important">
                                <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                                <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                                <el-dropdown-item>Cấu hình</el-dropdown-item>
                                <el-dropdown-item style="border-top: 1px solid #F1F3F8">Đăng xuất</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                
            </el-header>

            <slot name="table"></slot>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'BaseLayout',
    data() {
        return {
            circleUrl: "https://p16-tiktokcdn-com.akamaized.net/aweme/720x720/tiktok-obj/29c049f1148e9c9643882cab50bded5f.jpeg",
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            console.log(`current page: ${val}`);
        }
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