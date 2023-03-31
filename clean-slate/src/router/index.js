import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import BookingPage from '../views/BookingPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: ServicesPage
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/booking',
        name: 'BookingPage',
        component: BookingPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router