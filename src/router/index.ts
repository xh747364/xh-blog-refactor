import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "home2",
        redirect: '/home',
    },
    {
        path: '/home',
        name: "home",
        component: () => import("../pages/home/home.vue")
    },
    {
        path: '/notFound',
        name: "notFound",
        component: () => import("../pages/home/home.vue")
    }
];

const router = createRouter({
    history: createWebHistory(), //替代之前的mode，是必须的
    routes
});
router.beforeEach((to, from, next) => {
    // 跳转404
    !to.name ? next("/notFound") : next();
  });
export default router;