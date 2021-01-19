<template>
    <el-row :gutter="24">
        <el-col :span="3"><div class="sideSpace"></div></el-col>
        <el-col :span="18">
            <base-layout style="background-color: white;">
                <template v-slot:banner>
                    <el-image
                        width="100%"
                        src="https://wallpaperaccess.com/full/2461288.jpg">
                    </el-image>
                </template>
                <template v-slot:adsLeft>
                    <el-image
                        src="https://i2.wp.com/www.wplastics.com/wp-content/uploads/2020/05/Lumint-ad-Side-Bar.png?ssl=1"
                        :fit="fill">
                    </el-image>
                </template>
                <template v-slot:content>
                    <el-breadcrumb separator="/"  style="margin: 20px 0; font-size: 13px;">
                        <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
                        <el-breadcrumb-item>Công nghệ</el-breadcrumb-item>
                        <el-breadcrumb-item>Trên tay Samsung Galaxy Buds Pro: đẹp và nhiều công nghệ</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div>
                        <el-image style="border-radius: 20px"
                            src="https://photo2.tinhte.vn/data/attachment-files/2021/01/5305182_tren_tay_bud_pro_tinhte-7.jpg">
                        </el-image>
                        <p style="text-align: left; font-size: 15px">
                            Galaxy Buds Pro là một chiếc tai nghe đặc biệt và thú vị của Samsung. Nó là sản phẩm nối 
                            tiếp với chiếc Galayx Buds ra mắt trước đó nhưng được trang bị nhiều tính năng hơn, nhiều 
                            công nghệ hơn và mục đích là làm sao nâng cao trải nghiệm của người dùng.
                        </p>
                    </div>
                </template>
                <template v-slot:adsRight>
                    <el-image
                        src="https://i2.wp.com/www.wplastics.com/wp-content/uploads/2020/05/Lumint-ad-Side-Bar.png?ssl=1"
                        :fit="fill">
                    </el-image>
                </template>
            </base-layout>
        </el-col>
    </el-row>
</template>

<script>
import BaseLayout from './BaseLayout.vue'
export default {
    name: "NewsDetailPage",
    components: {
        BaseLayout,
    }
}
</script>>

<style lang="scss" scoped>
.el-row {
    background-color: #D8E0EA;
    .el-col {
        .sideSpace {
            width: 100%;
            height: 200px;
            background-color: #D8E0EA;
        }
    }
}
</style>