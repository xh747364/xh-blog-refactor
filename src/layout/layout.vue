<template>
    <el-container>
        <el-aside>
            <aside-view></aside-view>
        </el-aside>
        <el-container>
            <el-header>
                <header-view></header-view>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import AsideView from "./components/aside.vue"
import HeaderView from "./components/header.vue"
</script>

<style scoped>
.el-container{
    width: 100%;
    min-width: 970px;
    height: 100%;
}
.el-container .el-aside{
    width: auto;
    overflow: inherit;
}
</style>