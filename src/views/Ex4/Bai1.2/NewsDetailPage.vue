<template>
    <el-row :gutter="24">
        <el-col :span="3"><div class="sideSpace"></div></el-col>
        <el-col :span="18">
            <base-layout style="background-color: white;">
                <template v-slot:banner>
                    <el-image
                        width="100%"
                        src="https://img4.thuthuatphanmem.vn/uploads/2020/08/04/hinh-anime-cac-co-nang-toc-tim-hiem_102944405.jpg">
                    </el-image>
                </template>
                <template v-slot:adsLeft>
                    <el-image
                        src="https://dzdigi.com/wp-content/uploads/2020/10/25-hinh-anh-nhan-vat-anime-dep-trai-nhat-1.jpg"
                        :fit="fill">
                    </el-image>
                </template>

                <template v-slot:content>
                  <el-breadcrumb separator="/"  style="margin: 20px 0; font-size: 13px;">
                    <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item>Anime</el-breadcrumb-item>
                    <el-breadcrumb-item>Atack on titan là bộ anime ăn khách nhất 2018</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div>
                    <el-image style="border-radius: 20px"
                              src="https://media.comicbook.com/2020/05/attack-on-titan-final-season-eren-yeager-1222950.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart">
                    </el-image>
                    <p style="text-align: left; font-size: 15px">
                      Anime đại chiến titan có rất nhiều cảnh hoành tráng, đã có thời điểm bộ anime này
                      đã vượt qua cả one pice truyện bán ra, cốt truyện lôi cuốn, logic và chân thưc. Truyện
                      có chiều sâu.
                    </p>
                  </div>
                </template>
              <router-view/>
                <template v-slot:adsRight>
                    <el-image
                        src="https://i.pinimg.com/564x/c0/54/7e/c0547e2fffedcdd8d7d262af9ceffc33.jpg"
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