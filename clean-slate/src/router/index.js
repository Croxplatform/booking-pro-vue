import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        //
        // which is lazy-loaded when the route is visited
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router