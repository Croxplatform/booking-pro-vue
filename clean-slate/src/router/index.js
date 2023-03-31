import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import BookingPage from '../views/BookingPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/booking',
        name: 'Booking',
        component: BookingPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router