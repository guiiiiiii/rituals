import {createRouter, createWebHistory} from 'vue-router'

const routes= [
    {
        path: '/', 
        redirect: '/home' 
    }, 
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/register',
        component: () => import('../views/Register.vue'),
    },
    {
        path : '/404',
        component : () => import('../views/ErrorPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/404"
    }
 ] ;

 const router  = createRouter({
    history : createWebHistory(),
    routes
 });

 export default router;