<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
            <div class="flex-grow">
                <!-- <el-icon><Expand /></el-icon> -->
                <el-icon class="collapse-switch__on" :size="20"><Fold /></el-icon>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item
                    ><a href="/">promotion management</a></el-breadcrumb-item
                    >
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="flex-grow" />
            <el-menu-item index="1">菜单1</el-menu-item>
            <el-sub-menu index="2">
            <template #title>谢欢</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.el-header{
    padding: 0;
}
.collapse-switch__on{
    cursor: pointer;
    margin-right: 16px;
}
</style>