<template>
    <!--<Spinner/>-->

    <HeaderSection/>

    <router-view></router-view>

    <FooterSection/>


</template>


<script>
    import HeaderSection from './components/layouts/HeaderSection.vue';
    import FooterSection from './components/layouts/FooterSection.vue';
    import Spinner from './components/Modules/Spinner.vue';


    export default{
        name: 'App',
        components: {
            HeaderSection, FooterSection, Spinner
        }
    }
</script>


<style>
</style>
