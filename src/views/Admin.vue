<template>
    <base-layout>
            <router-view/>
    </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout.vue'
export default {
    name: "Admin",
   
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