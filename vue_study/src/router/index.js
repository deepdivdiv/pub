import { createRouter, createWebHashHistory } from 'vue-router';
import TheIndex from '@/views/index.vue';
import TheStyleGuide from '@/views/StyleGuide.vue';


const routes = [
    {
        path: '/',
        component: TheIndex,
    },
    {
        path: '/styleGuide',
        component: TheStyleGuide,
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
});

export default router;
