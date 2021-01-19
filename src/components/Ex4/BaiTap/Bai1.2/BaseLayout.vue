<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <slot name="banner"></slot>
            <el-menu :default-active="activeIndex" class="el-menu-demo block" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">Trang chủ</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Thể thao</template>
                    <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
                    <el-menu-item index="2-2">Bóng đá châu âu</el-menu-item>
                    <el-menu-item index="2-3">Võ thuật</el-menu-item>
                    <el-menu-item index="2-3">Các môn thể thao khác</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">Sức khỏe</template>
                    <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
                    <el-menu-item index="3-2">Làm đẹp</el-menu-item>
                    <el-menu-item index="3-3">Đại dịch Covid-19</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">Pháp luật</el-menu-item>
                <el-menu-item index="5">Du lịch</el-menu-item>
                <el-menu-item index="6">Giáo dục</el-menu-item>
                <el-menu-item index="7">Văn hóa</el-menu-item>
                <el-menu-item index="8">Công nghệ</el-menu-item>
                <el-menu-item index="9">Giải trí</el-menu-item>
            </el-menu>
            <el-row :gutter="24" style="box-sizing: border-box; padding-top: 5px">
                <el-col :span="6">
                    <slot name="adsLeft"></slot>
                </el-col>
                <el-col :span="12">
                    <slot name="content"></slot>
                </el-col>
                <el-col :span="6">
                    <slot name="adsRight"></slot>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    
}
</script>>

<style lang="scss" scoped>
.div {
    background-color: #FDFDFD;
    .el-menu {
        width: 100%;
    }
    .el-row {
        .content {
            background-color: white;
        }
    }
}
</style>