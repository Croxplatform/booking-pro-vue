<template>
  <HomePage/>
</template>

<script>
import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import ServicesPage from './components/pages/ServicesPage.vue'

export default {
  name: 'App',
  components: {
    HomePage, AboutPage, ServicesPage, ContactPage
  }
}
</script>

<style>

</style>
