<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <slot name="banner"></slot>
            <el-menu :default-active="activeIndex" class="el-menu-demo block" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="/login">Trang chủ</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Hành động</template>
                    <el-menu-item index="2-1">Hành động 1</el-menu-item>
                    <el-menu-item index="2-2">Hành động 2</el-menu-item>
                    <el-menu-item index="2-3">Hành động 3</el-menu-item>
                    <el-menu-item index="2-3">Hành động 4</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">Tình cảm</template>
                    <el-menu-item index="3-1">Tình cảm 1</el-menu-item>
                    <el-menu-item index="3-2">Tình cảm 2</el-menu-item>
                    <el-menu-item index="3-3">Tình cảm 3</el-menu-item>
                </el-submenu>
                <el-menu-item index="8"><router-link to="/about">Harem</router-link></el-menu-item>
                <el-menu-item index="9">Ftasy</el-menu-item>
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