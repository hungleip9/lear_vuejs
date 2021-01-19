<template>
    <base-layout>
        <template v-slot:title class="title">
            Quản lý sản phẩm 
        </template>
        <template v-slot:table>
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
    </base-layout>
</template>

<script>
import BaseLayout from './BaseLayout.vue'
export default {
    name: "ProductPage",
    data () {
        const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        };
        return {
            tableData: Array(4).fill(item),
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
        }
    },
    components: {
        BaseLayout
    }
}
</script>

<style lang="scss" scoped>
    .el-main {
        
        .block {
            text-align: right;
            margin-top: 20px;
        }
    }
</style>