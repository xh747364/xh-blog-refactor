import { defineStore } from "pinia";
import { ref } from "vue";
export const useHome = defineStore("todo", ()=> {
    const item = ref<number>(0)
    const addItem = () => {
        item.value += 1;
    }
    return {
        item,
        addItem
    }
},{ persist: true})