import Vue from 'vue';
import VueRouter from 'vue-router';

import AppMain from '@/views/AppMain.vue';
import AppHistory from '@/views/AppHistory.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: AppMain,
    },
    {
        path: '/history',
        name: 'history',
        component: AppHistory,
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
