import { createRouter, createWebHistory } from "vue-router";


import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPasswrod from "../views/ResetPassword.vue";
import GuestLayout from "../views/GuestLayout.vue";

const routes = [

    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword,
    },

    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPasswrod,
    },

    {
        path: '/guest-layout',
        name: 'guest-layout',
        component: GuestLayout,
    },

];

const router = createRouter({

    history: createWebHistory(),
    routes
})

export default router;