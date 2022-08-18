<script setup lang="ts">
import { useHome } from "../../store"
const item = useHome()
</script>
<template>
{{item.item}}
<button @click="item.addItem">添加</button>
</template>