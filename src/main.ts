import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

// 引入element ui  icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 初始化 pinia
const pinia = createPinia()

// pinia 持久化
pinia.use(piniaPluginPersistedstate);

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
